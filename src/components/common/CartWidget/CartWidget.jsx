import {BsCart} from "react-icons/bs"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {cart, unidadesTotales} = useContext(CartContext);

  let unidadesCarrito = unidadesTotales();

  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={unidadesCarrito} color="primary">
            <BsCart color="white" />
        </Badge>
      </Link>
    </div>
  )
}

export default CartWidget