import { useState, useEffect } from 'react';
import "./styles.css";
import * as XLSX from 'xlsx';

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

interface MemberTableProps {
    data: Empenho[];
}

function MemberTable({ data }: MemberTableProps) {
    const [filteredData, setFilteredData] = useState<Empenho[]>(data);
    const [selectedTipoLicitacao, setSelectedTipoLicitacao] = useState<string>('');
    const [selectedModalidade, setSelectedModalidade] = useState<string>('');
    const [NomeFilter, setNomeFilter] = useState<string>('');
    const [ObjetoFilter, setObjetoFilter] = useState<string>('');
    const [numeroEmpenhoFilter, setNumeroEmpenhoFilter] = useState<string>('');

    const uniqueTipoLicitacaoValues = getUniqueValues(data, 'tipoLicitacao');
    const uniqueModalidadeValues = getUniqueValues(data, 'modalidadeLicitacao');

    function getUniqueValues<T>(data: T[], key: keyof T): string[] {
        const uniqueValues = new Set<string>();
        data.forEach((item) => {
            uniqueValues.add((item[key] ?? '').toString());
        });
        return Array.from(uniqueValues);
    }

    function applyFilters(): void {
        const filtered = data
            .filter((item) => selectedTipoLicitacao === '' || item.tipoLicitacao === selectedTipoLicitacao)
            .filter((item) => selectedModalidade === '' || item.modalidadeLicitacao === selectedModalidade)
            .filter((item) => removeAccents(item.nomeCredor.toLowerCase()).includes(removeAccents(NomeFilter.toLowerCase())))
            .filter((item) => removeAccents(item.objeto.toLowerCase()).includes(removeAccents(ObjetoFilter.toLowerCase())))
            .filter((item) => item.numeroEmpenho.toLowerCase().includes(numeroEmpenhoFilter.toLowerCase()));

        setFilteredData(filtered);
    }


    function removeAccents(str: string): string {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function clearFilters(): void {
        setSelectedTipoLicitacao('');
        setSelectedModalidade('');
        setNomeFilter('');
        setNumeroEmpenhoFilter('');
        setFilteredData(data);
    }

    function exportToXLS(): void {
        if (filteredData.length === 0) {
            alert("Não há dados para exportar.");
            return;
        }

        const dataWithFooter = addFooterToData(filteredData);
        const ws = XLSX.utils.json_to_sheet(dataWithFooter);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Empenhos");
        XLSX.writeFile(wb, "Relatorio.xlsx");
    }

    function addFooterToData(data: Empenho[]): Empenho[] {
        const footer = {
            nomeCredor: 'Fonte da Informação: GESP',
            numeroEmpenho: 'Total: ' + getTotal()
        };
        return [...data, footer as unknown as Empenho];
    }

    function getTotal(): number {
        return filteredData.length;
    }

    function printPage() {
        window.print();
    }

    useEffect(() => {
        applyFilters();
    }, [selectedTipoLicitacao, selectedModalidade, NomeFilter, numeroEmpenhoFilter,ObjetoFilter]);

    return (
        <div>
            <h2>Lista de Empenhos</h2>
            <div className='filtros'>
                <table className="parametros center">
                    <tbody>
                        <tr className="parametros">
                            <td>Tipo de Licitação:</td>
                            <td>
                                <select className='selectTipoLicitacao' value={selectedTipoLicitacao} onChange={(e) => setSelectedTipoLicitacao(e.target.value)}>
                                    <option value="">Selecione o Tipo</option>
                                    {uniqueTipoLicitacaoValues.map((tipo, index) => (
                                        <option key={index} value={tipo}>
                                            {tipo}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr className="parametros">
                            <td>Modalidade:</td>
                            <td>
                                <select className='selectModalidade' value={selectedModalidade} onChange={(e) => setSelectedModalidade(e.target.value)}>
                                    <option value="">Selecione a Modalidade</option>
                                    {uniqueModalidadeValues.map((modalidade, index) => (
                                        <option key={index} value={modalidade}>
                                            {modalidade}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='buttons'>
                <button onClick={clearFilters}>Limpar</button>
                <button onClick={printPage}>Imprimir</button>
                <button onClick={exportToXLS}>Exportar</button>
            </div>
            <div className='rodape'>
                <p>Fonte da Informação: GESP</p>
                <b>Total:</b> {getTotal()}
            </div>
            <table className='tabelaFormatada'>
                <thead style={{ display: 'table-header-group' }}>
                    <tr className='2'>
                        <th className='vazio' colSpan={5} />
                        <th className='nomeacao' colSpan={2}>Detalhes</th>
                    </tr>
                    <tr>
                        <th className='teste2'>
                            <div>
                                <label>Nome Credor</label>
                                <input className="inputNome" type="text" onChange={(e) => setNomeFilter(e.target.value)} />
                            </div>
                        </th>
                        <th>
                            <div className='grid'>
                                <label>Número Empenho</label>
                            </div>
                            <input className="inputNumeroEmpenho" type="text" onChange={(e) => setNumeroEmpenhoFilter(e.target.value)} />
                        </th>
                        <th>
                            <div className='CargoEfetivo'>Tipo Licitação</div>
                            <select className="selectTipoLicitacao2" value={selectedTipoLicitacao} onChange={(e) => setSelectedTipoLicitacao(e.target.value)}>
                                <option value="">Todos</option>
                                {uniqueTipoLicitacaoValues.map((tipo, index) => (
                                    <option key={index} value={tipo}>
                                        {tipo}
                                    </option>
                                ))}
                            </select>
                        </th>
                        <th className='grid'>
                            <div>Modalidade</div>
                            <select className='selectModalidade' value={selectedModalidade} onChange={(e) => setSelectedModalidade(e.target.value)}>
                                <option value="">Todas</option>
                                {uniqueModalidadeValues.map((modalidade, index) => (
                                    <option key={index} value={modalidade}>
                                        {modalidade}
                                    </option>
                                ))}
                            </select>
                        </th>
                        <th className='grid'>
                            <div>Valor Empenhado</div>
                        </th>
                        <th className='grid'>
                            <div>Valor Pago No Mês</div>
                        </th>
                        <th className='grid'>
                            <div>Data Empenho</div>
                        </th>
                        <th>
                            <div>Objeto</div>
                            <input
                                className='inputObjeto'
                                type="text"
                                value={ObjetoFilter}
                                onChange={(e) => setObjetoFilter(e.target.value)} // Garante que o valor seja atualizado corretamente
                            />

                        </th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td colSpan={2} style={{ textAlign: 'center' }}>
                            <b>Total:</b> {getTotal()}
                        </td>
                    </tr>
                </tfoot>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nomeCredor}</td>
                            <td>{item.numeroEmpenho}</td>
                            <td>{item.tipoLicitacao}</td>
                            <td>{item.modalidadeLicitacao}</td>
                            <td>{item.valorEmpenhado}</td>
                            <td>{item.valorPagoNoMes}</td>
                            <td>{item.dataEmpenho}</td>
                            <td>{item.objeto}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MemberTable;
