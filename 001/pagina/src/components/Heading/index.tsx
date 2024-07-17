// import { SectionBackground } from '../SectionBackground';
import React from 'react';
import * as Styled from './styles';

export interface HeadingProps {
    children: React.ReactNode;
    colorDark: boolean;
    headingSize: 'huge' | 'small' | 'medium' | 'big';
    uppercase : boolean;
    color : string
}

export const Heading = ({
children,
  colorDark = false,
  uppercase = false,
  color = '',
  headingSize = 'huge',
}: HeadingProps) => {
    return (
        <Styled.Title  
        colorDark={colorDark}
        uppercase={uppercase}
        color={color}
        headingSize={headingSize}
        > {children}
        </Styled.Title>
    );
}