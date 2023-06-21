/*Patron de diseno
uso de component container and presentacionales*/

// PRESENTACIONAL SOLO LLEVA EL HTML
const Counter = (props) => {
  return (
    <div>
      <button onClick={props.sumar}>sumar</button>
      <h3>este es el {props.contador}</h3> 
      <button onClick={props.restar}>restar</button>
    </div>
  );
}

export default Counter

