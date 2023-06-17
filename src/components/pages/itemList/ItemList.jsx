
const ItemList = ({saludo, nuevoSaludo, persona}) => {

  let otroSal = "tonsqueee";
  
  return (

    <div>
      <p>{saludo}</p>
      <p>esto lo hizo {persona.nombre}, que tiene {persona.edad} anos</p>
      <button onClick={()=> nuevoSaludo(otroSal)}>cambiar saludo</button>
    </div>

  )
}

export default ItemList