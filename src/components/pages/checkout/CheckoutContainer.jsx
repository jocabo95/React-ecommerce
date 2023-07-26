import { useState } from "react";

const CheckoutContainer = () => {
  
  const[data,setData]=useState({
    nombre:"", // keys deben ser iguales a name de input
    apellido:""
  })

  // BPM handleSubmit para validaciones (ej: determinar si password es valida al final)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("se envio");
    console.log(event)
    console.log(data)
  };

  // BPM handleChange para manejar cambios
  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  };
  
  return (

    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="nombre"
          onChange={handleChange}
        />
        <p>{data.nombre}</p>
        <input
          type="text"
          placeholder="apellido"
          name="apellido"
          onChange={handleChange}
        />
        <p>{data.apellido}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
    
  );
};

export default CheckoutContainer;
