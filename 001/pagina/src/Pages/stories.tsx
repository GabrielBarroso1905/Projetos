import { StoryFn } from "@storybook/react";
import { Page, PageProps } from ".";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export default {
    title: 'Pages/page1',
    component: Page,
}


export const Default: StoryFn<PageProps> = (args) => (
    <ThemeProvider theme={theme}>
        <Page {...args}>
        </Page>
    </ThemeProvider>
  );