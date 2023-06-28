import CounterContainer from "../../common/counter/CounterContainer";

const ItemList = ({saludo, saludoUsuario}) => {

  let input = "buenas bueeeeenas";
  
  return (
    <div>
      <button onClick={() => saludoUsuario(input)}>Saludar</button>
      <p>{saludo}</p>
      <CounterContainer stock={7}/>
    </div>
  );
}

export default ItemList