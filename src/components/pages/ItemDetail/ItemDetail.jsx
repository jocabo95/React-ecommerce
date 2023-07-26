import { useContext, useEffect, useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import { products } from "../../../productsMock";
import { useNavigate, useParams } from "react-router";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = () => {

  const [producto, setProducto] = useState({})
  const {addToCart} = useContext(CartContext)

  const {id} = useParams()
  const navigate = useNavigate();

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
  }

  return (
    <div>
        <h2>{producto.title}</h2>
        <h3>{producto.price}</h3>
        <CounterContainer stock={producto.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail