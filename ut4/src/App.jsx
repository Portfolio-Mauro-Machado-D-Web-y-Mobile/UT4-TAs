import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MultiInputList from './components/multiInputList/index.jsx'
import TaskList from './components/taskList/index.jsx'
import './App.css'

const App = () => {
  const [list, setList] = useState([]);
  return (
      <div>
          <MultiInputList list={list} setList={setList} />
          <TaskList list={list} setList={setList} />
      </div>
  );
};

export default App
