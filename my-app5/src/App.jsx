import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)

let flag = 15
  const addValue = () => {
    if (counter < 20){
      setCounter(counter+1)
    }
  }

const removeValue = () => {
  if (counter > 1) {
    setCounter(counter - 1)
  }
}
const multiplyby2 = () =>{
  if (counter<20) {
    setCounter(counter*2)
  } else {
    setCounter(counter/2)
  }
}

  return (
    <>
      <h1>Welcome</h1>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue}>Add Value {counter} </button>
      <button onClick={removeValue}>Remove Value {counter} </button>
      <button onClick={multiplyby2}>Multiply By 2 = {counter} </button>
    </>
  )
}

export default App
