import { useState } from "react";

const CheckoutContainer = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const enviarform = (event) => {
    event.preventDefault();
    console.log("se envio");
  };

  const capturarNombre = (event) => {
    setNombre(event.target.value);
  };

  const capturarApellido = (event) => {
    setApellido(event.target.value);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={enviarform}>
        <input
          type="text"
          placeholder="name"
          name="nombre"
          onChange={capturarNombre}
        />
        <p>{nombre}</p>
        <input
          type="text"
          placeholder="apellido"
          name="apellido"
          onChange={capturarApellido}
        />
        <p>{apellido}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
