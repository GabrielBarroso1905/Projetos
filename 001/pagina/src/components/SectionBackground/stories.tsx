import { Meta, StoryFn } from '@storybook/react';
import { SectionBackground, SectionBackgroundProps } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export default {
  title: 'Components/SectionBackground',
  component: SectionBackground,
  argTypes: {
    background: { control: 'boolean' },
    sectionId: { control: 'text' },
    children: { control: 'text' }, 
  },
} as Meta;

export const Default: StoryFn<SectionBackgroundProps> = ({...args }) => (
  <ThemeProvider theme={theme}>
    <SectionBackground {...args}>
    <h1>SectionBackground with Background</h1>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
        doloribus debitis minima nam beatae alias eius, mollitia asperiores
        animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
        quaerat aspernatur expedita!
      </p>
    </SectionBackground>
  </ThemeProvider>
);
