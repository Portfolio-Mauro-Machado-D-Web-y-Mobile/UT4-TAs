import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonDisappearText from './components/buttonDisappearText/index.jsx'
import './App.css'

const App = () => {

  const [value, setInputValue] = useState(0);

  return (
      <div>
          <ButtonDisappearText text='texto' />
      </div>
  );
};

export default App
