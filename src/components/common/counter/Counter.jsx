import "./counter.css"

const Counter = ({counter, sumar, restar, onAdd}) => {
    
  return (
    <div id="counter-container">
      <div id="counter">
        <button id="minusButton" className="counter-button" onClick={restar}>
          -
        </button>
        <p className="counter-number">{counter}</p>
        <button id="plusButton"  className="counter-button" onClick={sumar}>
          +
        </button>
      </div>

      <button className="buy-button" onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
}

export default Counter