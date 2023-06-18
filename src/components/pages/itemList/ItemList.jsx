
const ItemList = ({saludo, saludoUsuario}) => {

  let input = "buenas bueeeeenas";
  
  return (
    <div>
      <button onClick={()=> saludoUsuario(input)}>Saludar</button>
      <p>{saludo}</p>
    </div>
  );
}

export default ItemList