import React from "react"
import * as Styled from './styles';

export interface SimpleTextProps{
    children : React.ReactNode;
    textSize : "small" |"medium" |"large" |"huge" |"xsmall" ;
}

export const SimpleTextComponent = ({children,textSize}:SimpleTextProps) =>{
    return(
        <Styled.Container textSize={textSize}>{children}</Styled.Container>
    )
    
}