import * as Styled from './styles';
import React from 'react';
import { SectionContainer } from '../SectionContainer';

export interface SectionBackgroundProps {
    children: React.ReactNode;
    background?: boolean;
    sectionId?: string;
}
export const SectionBackground = ({
    children,
    background = false,
    sectionId = '',

}: SectionBackgroundProps) => {
    return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
    );
}
