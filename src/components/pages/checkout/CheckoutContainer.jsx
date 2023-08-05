import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseCofing";
import {addDoc, collection,  serverTimestamp,  updateDoc,  doc,} from "firebase/firestore";
import Checkout from "./Checkout";

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

  const info = {
    data,
    orderId,
    handleChange,
    handleSubmit
  }

  return (
    <Checkout info={info}/>
  );
};

export default CheckoutContainer;
