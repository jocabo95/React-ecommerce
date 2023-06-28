//CONTAINER SOLO LLEVA LA LOGICA

//CONTAINER SE RENDERIZA EN APP. PRESENTACIONAL ES HIJO DE CONTAINER

import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({stock, onAdd}) => {

  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador+1) : alert("cantidad max");
  }

  const restar =()=>{
    contador > 1 && setContador(contador-1);
  }

  return (
    <Counter contador={contador} sumar={sumar} restar={restar}/>
  )
}

export default CounterContainer
