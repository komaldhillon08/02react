import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [counter , setCounter] = useState(0)

  // let counter = 5 ;
  let addValue = () => {

    // counter =  counter + 1 ;

    // this is one way 
    // setCounter(counter + 1) 

  // this condition is not increment up to 20 
     if (counter >= 20) {
      console.log("counter is 20 that is why stope");
      return ;
    }
     // this is second way 
    counter = counter +1 
    setCounter(counter)
    console.log("counter", counter , Math.random()  );
  }

  // remove 
  let remove = () => {

  // this condition is not decrement in 0 
      if (counter <= 0) {
    console.log("counter is 0 that is why not decrement " );
    return
  }
      counter = counter - 1 
      setCounter(counter)

  }

  return (
    <>
     <h1>komalpreet singh</h1>
     <h2>Counter Value {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button> <br />
    <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App
