import styled, { css } from 'styled-components';
// import { theme } from '../../styles/theme';

interface ContainerProps {
    position: 'start' | 'center' | 'end';
  }


export const BannerContainer = styled.div<ContainerProps>`
${({theme,position}) => css`
  margin: 100px auto; 
  background: linear-gradient(to right, ${theme.colors.secondaryColor} 10%, ${theme.colors.secondaryGradienteColor} 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: ${position};
  padding: 2rem 0rem;
  position: relative;
  height: 25.2rem;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
    text-align: center;
    padding: 4rem 2rem;
  }
    `}
`;
