
const Counter = ({counter, sumar, restar, onAdd}) => {
    
  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <p>{counter}</p>
        <button onClick={restar}>Restar</button>

        <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter