import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonCounts from './components/buttonCounts/index.jsx'
import './App.css'

const App = () => {

  const [value, setInputValue] = useState(0);

  useEffect(() => {
    document.title = value;
  }, [value]);

  return (
      <div>
          <ButtonCounts value={value} setter={setInputValue} />
      </div>
  );
};

export default App
