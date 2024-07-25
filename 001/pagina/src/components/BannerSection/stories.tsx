import { Meta, StoryFn } from "@storybook/react";
import { BannerSection, BannerProps } from "./Index";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";


export default {
    title: 'Components/BannerSection',
    component: BannerSection,
    text: "Texto de teste",
} as Meta;


export const Default: StoryFn<BannerProps> = (args) => (
    <ThemeProvider theme={theme}>
        <BannerSection {...args} text="Descrição do Banner Section">
            Banner Section
        </BannerSection>
    </ThemeProvider>
);
