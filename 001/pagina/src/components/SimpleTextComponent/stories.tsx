import { SimpleTextComponent,SimpleTextProps } from ".";
import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';



export default {
    title: 'Components/SimpleTextComponent',
    component: SimpleTextComponent,
} as Meta;

export const Default: StoryFn<SimpleTextProps> = (args) => (
    <ThemeProvider theme={theme}>
        <SimpleTextComponent {...args}>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit.Doloremque laudantium tenetur architecto. Corrupti, in sint? Deserunt delectus tempora vel, praesentium eligendi accusamus? Aliquid debitis perspiciatis nisi ipsum modi totam cumque!
        </SimpleTextComponent>
    </ThemeProvider>
);
