import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import './index.css';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>
);
