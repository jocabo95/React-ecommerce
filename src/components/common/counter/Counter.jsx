// /*Patron de diseno
// uso de component container and presentacionales*/

// // PRESENTACIONAL SOLO LLEVA EL HTML
const Counter = ({contador, sumar, restar}) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>restar</button>
    </div>
  );
}

export default Counter

