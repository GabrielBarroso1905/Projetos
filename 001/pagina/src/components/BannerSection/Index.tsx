import React from "react";
import * as Styled from "./styles"
import { SectionContainer } from "../SectionContainer";
import { SectionBackground, SectionBackgroundProps } from "../SectionBackground";
import { Heading, HeadingProps } from "../Heading";

export interface BannerProps extends SectionBackgroundProps, HeadingProps {
  children: React.ReactNode;
  position: 'start' | 'center' | 'end';
}

export const BannerSection = ({ children,position, background, ...headingProps }: BannerProps) => {
  return (
    <SectionBackground background={background} sectionId="">
      <Styled.BannerContainer position={position}>
        <SectionContainer >
          <Heading {...headingProps}>
            {children}
          </Heading>
        </SectionContainer>
      </Styled.BannerContainer>
    </SectionBackground>
  );
}
