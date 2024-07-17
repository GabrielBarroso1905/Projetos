import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface ContainerProps {
  background?: boolean;
}

const containerBackgroundActivate = (theme: Theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
