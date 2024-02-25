import React, { useState } from 'react'
import StartGame from './StartGame'
import GamePlay from './GamePlay'

const App = () => {
  const [isStarted, setIsStarted] = useState(false)
  const start = ()=>{
    setIsStarted(prev => !prev)
  }
  return (
    <div>
      {isStarted ? <GamePlay/> : <StartGame toggle={start}/>}     
    </div>
  )
}

export default App