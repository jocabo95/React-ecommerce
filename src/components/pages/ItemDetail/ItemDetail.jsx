import { useContext, useEffect, useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import { db } from "../../../firebaseCofing";
import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetail = () => {

  const [producto, setProducto] = useState({})
  const { addToCart, getQuantityById} = useContext(CartContext);

  const {id} = useParams()

  //un totales de un producto en carrito
  const totalQuantity = getQuantityById(id);

  useEffect(()=>{

    let productCollection = collection(db, "products");
    let productRef = doc(productCollection, id)

    getDoc(productRef).then((res)=>{
      setProducto({id: res.id, ...res.data()})
    })
    
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

        {/* mostrar counter solo si hay stock */}
        {
          producto.stock > 0 ?  <CounterContainer stock={producto.stock} onAdd={onAdd} initialQuantity={totalQuantity}/> : <h5>Sin stock</h5>
        }

    </div>
  )
}

export default ItemDetail

//USEFFECT SIN FIREBASE
// useEffect(() => {
//   let productoSeleccionado = products.find((elemento) => {
//     return elemento.id === +id;
//   });

//   const tarea = new Promise((res, rej) => {
//     res(productoSeleccionado);
//   });

//   tarea.then((res) => setProducto(res));
// }, [id]); 