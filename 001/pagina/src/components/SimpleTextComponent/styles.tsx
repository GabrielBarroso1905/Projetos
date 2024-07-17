import styled, { css } from 'styled-components';


interface Container{
    textSize : "small" |"medium" |"large" |"huge" |"xsmall" 
} 
export const Container = styled.div<Container>`
 ${({ theme, textSize }) => css`
    font-size: ${
      
      textSize === 'small'
      ? theme.font.sizes.small
      : textSize === 'medium'
      ? theme.font.sizes.medium
      : textSize === 'large'
      ? theme.font.sizes.large
      : textSize === 'huge'
      ? theme.font.sizes.huge
      : textSize === 'xsmall'
      ? theme.font.sizes.xsmall
      : theme.font.sizes.medium};
  `}
`;
