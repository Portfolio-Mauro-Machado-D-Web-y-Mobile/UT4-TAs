
import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ChangeThemeButton from './components/ChangeThemeButton';
import BlockOfText from './components/BlockOfText';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <ChangeThemeButton/>
        <BlockOfText text='texto'/>
      </div>
    </ThemeProvider>
  );
}

export default App;
