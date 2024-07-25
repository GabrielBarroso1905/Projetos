import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    /* padding: 20px; Ajuste o padding conforme necessário */
    display: flex;
    flex-direction: column;
    gap: 30px; /* Define o espaço entre os componentes */
  `}
`;
