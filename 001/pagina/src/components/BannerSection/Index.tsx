import React from "react";
import * as Styled from "./styles"
import { SectionContainer } from "../SectionContainer";
import { Heading, HeadingProps } from "../Heading";
import { SimpleTextComponent, SimpleTextProps } from "../SimpleTextComponent";

export interface BannerProps extends HeadingProps,SimpleTextProps {
  children: React.ReactNode;
  position: 'start' | 'center' | 'end';
  text : string;
}

export const BannerSection = ({ children,text, ...rest}: BannerProps) => {
  return (
    
      <Styled.BannerContainer position={"center"}>
        <SectionContainer >
          <Heading {...rest}>
            {children}
          </Heading>
          <SimpleTextComponent {...rest} textPosition="center">{text}</SimpleTextComponent>
        </SectionContainer>
      </Styled.BannerContainer>

  );
}
