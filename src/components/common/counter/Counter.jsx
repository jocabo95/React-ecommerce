
const Counter = ({counter, sumar, restar}) => {
    
  return (
    <div>
        <button onClick={sumar}>Sumar</button>
        <p>{counter}</p>
        <button onClick={restar}>Restar</button>
    </div>
  )
}

export default Counter