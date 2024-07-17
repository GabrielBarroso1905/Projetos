// Defina a estrutura do seu tema
export const theme = {
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#FF8800',
    secondaryGradienteColor: '#FF4800',
    tertiaryColor: '#FA0000',
    white: '#FFFFFF',
    mediumGray: '#BEBEBE',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
      tertiary: "'DM Serif Display', serif",
    },
    sizes: {
      xxsmall: '1.2rem',
      xsmall: '1.6rem',
      small: '1.9rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
};

// Defina uma interface TypeScript para o seu tema
export interface Theme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    secondaryGradienteColor: string;
    tertiaryColor: string;
    white: string;
    mediumGray: string;
  };
  font: {
    family: {
      default: string;
      secondary: string;
      tertiary: string;
    };
    sizes: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  };
  media: {
    lteMedium: string;
  };
  spacings: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    huge: string;
    xhuge: string;
  };
}
