import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card/index.jsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Card title='Card 1' description='Description' assignedTo='Juancho' startDate='10/10/1999' endDate='11/9/2001'></Card>
        <Card title='Card 2' description='Description' assignedTo='Juan' startDate='10/10/1989' endDate='11/9/2013'></Card>
        <Card title='Card 2' description='Description' assignedTo='cho' startDate='10/10/1979' endDate='11/9/2010'></Card>
      </div>
    </>
  )
}

export default App
