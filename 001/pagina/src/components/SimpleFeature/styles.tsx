import styled, { css } from 'styled-components';

// Contêiner principal
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center; 
    gap: 200px;
    margin: 100px auto; 
    width: 100%; 
  `}
`;

// Caixa de características
export const FeatureBox = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    width: 300px;
    height: 300px;
    background-color: red;
    display: flex;
    align-items: center; /* Centraliza o conteúdo verticalmente */
    justify-content: center; /* Centraliza o conteúdo horizontalmente */
    font-family: 'Courier New', Courier, monospace;
  `}
`;

// Opcional: Contêiner extra para cada box
export const ContainerFeatureBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column; /* Ou 'row' dependendo do layout desejado */
    align-items: center; /* Centraliza as caixas verticalmente */
  `}
`;

// Estilo para o texto dentro da FeatureBox
export const TextFeatureBox = styled.div`
  ${({ theme }) => css`
    font-family: 'Courier New', Courier, monospace;
  `}
`;
