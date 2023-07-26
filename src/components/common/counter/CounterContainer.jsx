import { useState } from "react"
import Counter from "./Counter";


const CounterContainer = ({stock, onAdd}) => {

    const [counter, setCounter]=useState(1);

    const sumar = () =>{
      console.log("counter=", counter, "stock=", stock)
      counter < stock ? setCounter(counter + 1): alert("No hay stock")
    }

    const restar = () => {
      counter > 1 ? setCounter(counter-1): setCounter(counter)
    }

  return (
    <div>
      <Counter counter={counter} sumar={sumar} restar={restar} onAdd={onAdd} />
    </div>
  );
}

export default CounterContainer