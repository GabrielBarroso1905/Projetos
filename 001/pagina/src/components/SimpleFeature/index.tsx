import React from 'react';
import * as Styled from './styles';

export const SimpleFeature = () => {
  return (
    <Styled.Container>
      {Array.from({ length: 3 }).map((_, index) => (
        <Styled.ContainerFeatureBox key={index}>
          <Styled.FeatureBox/>
          <Styled.TextFeatureBox>Texto</Styled.TextFeatureBox>
        </Styled.ContainerFeatureBox>
      ))}
    </Styled.Container>
  );
};
