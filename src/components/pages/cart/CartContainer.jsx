import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";



const CartContainer = () => {

  //usecontext trae obj children desde contexto (destructurar solo lo que necesito en esta pagina)
  //recibe como input el contexto del que debe traer info
  const {cart, clearCart, deleteById, totalPrice} = useContext(CartContext);

  let total = totalPrice();

  //asigna clearcart a fn que se activa onclkick (EVITA INCLUIR BANNER EN CONTEXT)
  const limpiarCarrito = () =>{

    Swal.fire({
      title: "Desea vaciar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Aceptar",
      denyButtonText: `Cancelar`,
      }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Carrito vacio", "", "success");
        clearCart(); //limpia carrito
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "cancel");
      }
    });

  }


  return (
    <div>
      <h1>Carritooo</h1>
      {cart.map((el) => {
        return (
          <div key={el.id}>
            <h3>Producto: {el.title}</h3>
            <h4>Precio: {el.price}</h4>
            <h5>Cantidad: {el.quantity}</h5>
            <h5>El total es {total}</h5>
            <button onClick={() => deleteById(el.id)}>eliminar</button>
          </div>
        );
      })}
      
      {/* condicional para solo mostrar "limpiar todo" cuando haya items en carrito */}
      {cart.length > 0 && <button onClick={limpiarCarrito}>limpiar carrito</button>}

    </div>
  );
}

export default CartContainer