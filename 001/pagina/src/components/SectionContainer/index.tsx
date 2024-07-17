
import * as Styled from './styles';
import React from 'react';


interface SectionContainerProps{
  children: React.ReactNode,
}

export const SectionContainer = ({ children }:SectionContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

