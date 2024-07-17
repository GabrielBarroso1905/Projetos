import { useState } from 'react';
import './App.css';
import { Button } from './styled';
import { SectionBackground } from './components/SectionBackground';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SectionBackground background={true} sectionId='#sextion1'>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
      </SectionBackground>
      
      <SectionBackground background={true} sectionId='#sextion2'>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count Is {count}
        </Button>
      </SectionBackground>
    </>
  );
}

export default App;
