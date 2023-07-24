import { useEffect, useState } from "react"
import CounterContainer from "../../common/counter/CounterContainer"
import { products } from "../../../productsMock";
import { useParams } from "react-router";

const ItemDetail = () => {

    const [producto, setProducto] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        let productoSeleccionado = products.find((elemento)=>{
            return elemento.id === +id;
        })

        const tarea = new Promise((resolve, reject) => {
            resolve(productoSeleccionado)
        })

        tarea.then((res)=>setProducto(res))
    }, [id])    

    const addCart =()=>{
        console.log(
          products.find((elemento) => {
            return elemento.id === +id;
          })
        );
    }
  return (
    <div>
        <h2>{producto.title}</h2>
        <h3>{producto.price}</h3>
        <CounterContainer />
        <button onClick={addCart}>Agregar a carrito</button>
    </div>
  )
}

export default ItemDetail