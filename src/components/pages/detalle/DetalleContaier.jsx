import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseCofing";
import Swal from "sweetalert2";
import Detalle from "./Detalle";


const DetalleContainer = () => {
  const [producto, setProducto] = useState({});
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  //un totales de un producto en carrito
  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productCollection = collection(db, "products");
    let productRef = doc(productCollection, id);

    getDoc(productRef).then((res) => {
      setProducto({ id: res.id, ...res.data() });
    });
  }, [id, producto]);

  //manda cuantas un de un articulo se quieren enviar al carrito
  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart); // contexto global

    // disparar alerta
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const data = {
    producto,
    setProducto,
    addToCart,
    getQuantityById,
    totalQuantity,
    onAdd,
  };

  return (
    <div>
      <Detalle data={data} />
    </div>
  );
};

export default DetalleContainer;