import React from 'react';
import { Page, PageProps } from './Pages';

const App: React.FC = () => {
  const pageProps: PageProps = {
    textPosition: "center",
    children: <div>Conteúdo adicional da página</div>,
    background: true,
    sectionId: 'main-section',
    position: 'center', 
    colorDark: false, 
    headingSize: 'huge', 
    uppercase: false, 
    color: '#000000', 
    textSize: 'medium', 
    text: 'Texto do Banner', 
  };

  return (
    <Page {...pageProps} />
  );
}

export default App;
