import React from "react";
import * as Styled from "./styles"
import { SectionContainer } from "../SectionContainer";
import { SectionBackground, SectionBackgroundProps } from "../SectionBackground";
import { Heading, HeadingProps } from "../Heading";
import { SimpleTextComponent, SimpleTextProps } from "../SimpleTextComponent";

export interface BannerProps extends SectionBackgroundProps, HeadingProps,SimpleTextProps {
  children: React.ReactNode;
  position: 'start' | 'center' | 'end';
}

export const BannerSection = ({ children,position, background, ...rest}: BannerProps) => {
  return (
    <SectionBackground background={background} sectionId="">
      <Styled.BannerContainer position={position}>
        <SectionContainer >
          <Heading {...rest}>
            {children}
          </Heading>
          <SimpleTextComponent {...rest}>{children}</SimpleTextComponent>
        </SectionContainer>
      </Styled.BannerContainer>
    </SectionBackground>
  );
}
