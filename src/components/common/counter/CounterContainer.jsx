import { useState } from "react"
import Counter from "./Counter";


const CounterContainer = () => {

    const [counter, setCounter]=useState(1);

    let sumar = () =>{
      setCounter(counter+1)
    }

    let restar = () => {
      counter > 1 ? setCounter(counter-1): setCounter(counter)
    }

  return (
    <Counter counter={counter} sumar={sumar} restar={restar}/>
  )
}

export default CounterContainer