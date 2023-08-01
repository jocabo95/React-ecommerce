import { useContext, useEffect, useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import { products } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const ItemDetail = () => {

  const [producto, setProducto] = useState({})
  const { addToCart, getQuantityById} = useContext(CartContext);

  const {id} = useParams()

  //un totales de un producto en carrito
  const totalQuantity = getQuantityById(id);

  useEffect(()=>{
      let productoSeleccionado = products.find((elemento)=>{
          return elemento.id === +id;
      });

      const tarea = new Promise((res, rej) => {
          res(productoSeleccionado)
      });

      tarea.then((res)=>setProducto(res))
  }, [id])    

  //manda cuantas un de un articulo se quieren enviar al carrito
  const onAdd =(cantidad)=>{
    
    let productCart = {...producto, quantity: cantidad};
    addToCart(productCart); // contexto global

    // disparar alerta
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div>
        <h2>{producto.title}</h2>
        <h3>{producto.price}</h3>
        <CounterContainer stock={producto.stock} onAdd={onAdd} initialQuantity={totalQuantity}/>
    </div>
  )
}

export default ItemDetail