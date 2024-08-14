/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './index.css';
import MemberTable from './MemberTable';

interface Empenho {
  nomeCredor: string;
  cpfCnpj: string;
  objeto: string;
  tipoLicitacao: string;
  modalidadeLicitacao: string;
  numeroEmpenho: string;
  dataEmpenho: string;
  valorEmpenhado: string;
  valorPagoNoMes: string;
  valorPagoAteOMes: string;
  url_contrato: string | null;
  url_empenho: string | null;
}

function Ativos() {
  const [data, setData] = useState<Empenho[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
 useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const tipoFetch = import.meta.env.VITE_AMBIENTE_LOCAL_TESTES as string;

      if (tipoFetch === '1') {
        try {
          const jsonData = await import('./data.json');
          const localData = jsonData.default.data.value.dados as Empenho[];
          setData(localData);
        } catch (error) {
          console.error('Erro ao carregar o JSON:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        const apiUrl = import.meta.env.VITE_URL_API as string;
        const url = `${apiUrl}cdcredor=&ano=2024&mes=8&ug=070101&pagina=1`;
        

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
          }
          const jsonData = await response.json();
          const transformedData: Empenho[] = jsonData.resultado.map((member: any) => ({
            nomeCredor: member.nome,
            cpfCnpj: '', 
            objeto: member.funcao,
            tipoLicitacao: member.cargo_efetivo,
            modalidadeLicitacao: member.lotacao,
            numeroEmpenho: member.matricula.toString(),
            dataEmpenho: member.nomeacao_data_publicacao,
            valorEmpenhado: '', 
            valorPagoNoMes: '',
            valorPagoAteOMes: '', 
            url_contrato: null, 
            url_empenho: null 
          }));
          setData(transformedData);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <div className="loading">
            <div className="loading-text">Carregando Dados</div>
            <div className="loading-spinner" />
          </div>
        ) : (
          <MemberTable 
            data={data} 
          />
        )}
      </header>
    </div>
  );
}

export default Ativos;
