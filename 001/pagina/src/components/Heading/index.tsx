// import { SectionBackground } from '../SectionBackground';
import React from 'react';
import * as Styled from './styles';

export interface HeadingProps {
    children: React.ReactNode;
    colorDark: boolean;
    size: 'huge' | 'small' | 'medium' | 'big';
    uppercase : boolean;
    color : string
}

export const Heading = ({
children,
  colorDark = true,
  uppercase = false,
  color = '',
  size = 'huge',
}: HeadingProps) => {
    return (
        <Styled.Title  
        colorDark={colorDark}
        uppercase={uppercase}
        color={color}
        size={size}
        > {children}
        </Styled.Title>
    );
}