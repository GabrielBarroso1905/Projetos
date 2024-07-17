import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface ContainerProps {
  colorDark: boolean;
  size: 'small' | 'medium' | 'big' | 'huge'; 
  uppercase: boolean;
  color: string;
}

const titleSize = {
  small: (theme: Theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: Theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: Theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme: Theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1<ContainerProps>`
  ${({ theme, colorDark, size, uppercase, color }) => css`
    color: ${color || (colorDark ? theme.colors.primaryColor : theme.colors.white)};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
