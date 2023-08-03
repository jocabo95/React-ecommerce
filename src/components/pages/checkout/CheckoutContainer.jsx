import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseCofing";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  let { cart, totalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "", // keys deben ser iguales a name de input
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState("");

  let total = totalPrice();

  // BPM handleSubmit para validaciones (ej: determinar si password es valida al final)
  const handleSubmit = (event) => {
    event.preventDefault();

    // obj que guarda orden de compra
    let order = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    //crear orden en firebase
    const ordersCollection = collection(db, "orders");

    //con post no se maneja promis oblig. pero se recupera el id para simular un # de seguimiento de orden
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
    });

    //notificar el stock en firebase de cada documento
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  // BPM handleChange para manejar cambios
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>
      {orderId !== "" ? (
        <div>
          <h4>Gracias por su compra</h4>
          <h5>numero de seguimiento: {orderId}</h5>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
          <p>{data.nombre}</p>
          <input
            type="text"
            placeholder="312 457 2092"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="james.smith@gmail.com"
            name="email"
            onChange={handleChange}
          />
          <p>{data.apellido}</p>
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
