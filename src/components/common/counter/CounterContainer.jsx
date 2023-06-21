import { useState } from "react";
import Counter from "./Counter";

// CONTAINER SOLO LLEVA LOGICA
const CounterContainer = () => {
  let [contador, setContador] = useState();

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <Counter
      contador={contador}
      sumar={sumar}
      restar={restar}
    />
  );
};

export default CounterContainer;
