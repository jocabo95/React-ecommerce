import { useState } from "react"
import Counter from "./Counter";


const CounterContainer = () => {

    const [counter, setCounter]=useState(1);

    let sumar = () =>{
        setCounter(counter+1)
    }

    let restar = () => {
        setCounter(counter-1)
    }

  return (
    <Counter counter={counter} sumar={sumar} restar={restar}/>
  )
}

export default CounterContainer