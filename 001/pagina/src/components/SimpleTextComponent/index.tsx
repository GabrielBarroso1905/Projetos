import React from "react"
import * as Styled from './styles';

export interface SimpleTextProps{
    children : React.ReactNode;
    textSize : "small" |"medium" |"large" |"huge" |"xsmall" ;
    textPosition : 'start' | 'center' | 'end'
}
export const SimpleTextComponent = ({children,textSize,textPosition}:SimpleTextProps) =>{
    return(
        <Styled.Container textPosition={textPosition} textSize={textSize}>{children}</Styled.Container>
    )
    
}