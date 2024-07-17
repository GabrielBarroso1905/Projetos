import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Heading {...args}>
        <h1>Heading</h1>
    </Heading>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  colorDark: true,
  headingSize: 'huge',
  uppercase: false,
  color: '',
};
