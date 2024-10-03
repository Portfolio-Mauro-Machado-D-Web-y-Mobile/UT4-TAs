
import React from 'react';
import './App.css';
import UsernameWithContext from './components/UsernameWithContext';
import { UsernameProvider } from './contexts/UsernameContext';
import InputUsernameContext from './components/InputUsernameContext';

function App() {
  return (
    <UsernameProvider>
      <div className='App'>
        <InputUsernameContext/>
        <UsernameWithContext/>
      </div>
    </UsernameProvider>
  );
}

export default App;
