import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card/index.jsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Card>
            <h2 className='card-title'> Card 1</h2>
            <p className='card-description'>Description</p>
            <p className='card-assignedTo'>Juancho</p>
            <p className='card-startDate'>10/10/2000</p>
            <p className='card-endDate'>9/9/1999</p>
        </Card>

        <Card>
            <h2 className='card-title'> Card 2</h2>
            <p className='card-description'>Description</p>
            <p className='card-assignedTo'>Juancho</p>
            <p className='card-startDate'>10/10/2000</p>
            <p className='card-endDate'>9/9/1999</p>
        </Card>

        <Card>
            <h2 className='card-title'> Card 3</h2>
            <p className='card-description'>Description</p>
            <p className='card-assignedTo'>Juancho</p>
            <p className='card-startDate'>10/10/2000</p>
            <p className='card-endDate'>9/9/1999</p>
        </Card>
      </div>
    </>
  )
}

export default App
