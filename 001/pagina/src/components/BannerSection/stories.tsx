import { Meta, StoryFn } from "@storybook/react";
import { BannerProps, BannerSection } from "./Index";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";


export default {
    title: 'Components/BannerSection',
    component: BannerSection,
} as Meta;


export const Default: StoryFn<BannerProps> = (args) => (
    <ThemeProvider theme={theme}>
        <BannerSection {...args}>
            Banner Section
        </BannerSection>
    </ThemeProvider>
);
