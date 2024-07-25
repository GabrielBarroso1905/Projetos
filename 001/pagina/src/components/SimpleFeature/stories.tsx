import { SimpleFeature  } from ".";
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';



export default {
    title: 'Components/SimpleFeature',
    component: SimpleFeature,
} as Meta;

export const Default: StoryFn = (args) => (
    <ThemeProvider theme={theme}>
        <SimpleFeature {...args}>
    </SimpleFeature>
    </ThemeProvider>
);
