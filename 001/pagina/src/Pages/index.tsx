import { BannerProps, BannerSection } from "../components/BannerSection/Index";
import { SectionBackground, SectionBackgroundProps } from "../components/SectionBackground";
import { SimpleFeature } from "../components/SimpleFeature";
import { SimpleTextComponent, SimpleTextProps } from "../components/SimpleTextComponent";
import * as Styled from './syles';


export interface PageProps extends SectionBackgroundProps, BannerProps,SimpleTextProps{
    children: React.ReactNode;
}


export const Page = ({children, ...rest}:PageProps) =>{
 return(
    <SectionBackground {...rest}>
        <Styled.Container>
             <BannerSection {...rest} text="Texto do Banner">
                Banner Section
            </BannerSection>
        <SimpleTextComponent {...rest}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus ducimus veritatis alias, impedit aliquid tempore! Sint omnis quidem dolorem, itaque officiis cumque ex nihil amet repellendus accusamus temporibus molestias.
            </SimpleTextComponent>
            <SimpleTextComponent {...rest}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus ducimus veritatis alias, impedit aliquid tempore! Sint omnis quidem dolorem, itaque officiis cumque ex nihil amet repellendus accusamus temporibus molestias.
            </SimpleTextComponent>
             <>{children}</>
        </Styled.Container>
        <SimpleFeature></SimpleFeature>
    </SectionBackground>
 )
}