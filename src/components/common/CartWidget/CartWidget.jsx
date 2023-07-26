import {BsCart} from "react-icons/bs"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {cart} = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={cart.length} color="primary">
            <BsCart color="white" />
        </Badge>
      </Link>
    </div>
  )
}

export default CartWidget