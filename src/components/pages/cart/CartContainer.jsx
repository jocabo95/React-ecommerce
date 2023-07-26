import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";



const CartContainer = () => {

  //usecontext trae obj children desde contexto (destructurar solo lo que necesito en esta pagina)
  //recibe como input el contexto del que debe traer info
  const {cart, clearCart, deleteById} = useContext(CartContext);




  return (
    <div>
      <h1>Carritooo</h1>
      {
        cart.map((el)=>{
          return (
            <div key={el.id}>
              <h3>Producto: {el.title}</h3>
              <h4>Precio: {el.price}</h4>
              <h5>Cantidad: {el.quantity}</h5>
              <button onClick={()=>deleteById(el.id)}>eliminar</button>
            </div>
          )
        })
      }
      <button onClick={clearCart}>limpiar carrito</button>
    </div>
  );
}

export default CartContainer