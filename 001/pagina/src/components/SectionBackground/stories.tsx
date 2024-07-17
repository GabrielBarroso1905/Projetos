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

const Template: StoryFn<SectionBackgroundProps> = ({ children, ...args }) => (
  <ThemeProvider theme={theme}>
    <SectionBackground {...args}>
      {children}
    </SectionBackground>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  background: false,
  sectionId: 'default',
  children: (
    <div>
      <h1>Default SectionBackground</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
        doloribus debitis minima nam beatae alias eius, mollitia asperiores
        animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
        quaerat aspernatur expedita!
      </p>
    </div>
  ),
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  background: true,
  sectionId: 'with-background',
  children: (
    <div>
      <h1>SectionBackground with Background</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
        doloribus debitis minima nam beatae alias eius, mollitia asperiores
        animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
        quaerat aspernatur expedita!
      </p>
    </div>
  ),
};
