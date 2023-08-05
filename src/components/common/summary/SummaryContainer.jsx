import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Summary from "./Summary";

const SummaryContainer = () => {
  //usecontext trae obj children desde contexto (destructurar solo lo que necesito en esta pagina)
  //recibe como input el contexto del que debe traer info
  const { cart, clearCart, deleteById, totalPrice } = useContext(CartContext);

  let total = totalPrice();

  //asigna clearcart a fn que se activa onclkick (EVITA INCLUIR BANNER EN CONTEXT)
  const limpiarCarrito = () => {
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
  };

  const data = {
    cart,
    total,
    deleteById,
    limpiarCarrito,
  };

  return (
    <div>
      <Summary data={data} />
    </div>
  );
};

export default SummaryContainer;
