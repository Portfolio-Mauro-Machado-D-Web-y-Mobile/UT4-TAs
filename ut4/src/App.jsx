// src/App.jsx
import React from 'react';
import './App.css';
import UsernameWithContext from './components/usernameWithContext/index.jsx';
import { UsernameProvider } from './contexts/UsernameContext';

function App() {
  return (
    <UsernameProvider>
      <div className='App'>
        <UsernameWithContext />
      </div>
    </UsernameProvider>
  );
}

export default App;
