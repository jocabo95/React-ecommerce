import {BsCart} from "react-icons/bs"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div>

      <Link to="/">
        <Badge badgeContent={1} color="primary">
            <BsCart color="white" />
        </Badge>
      </Link>
      
    </div>
  )
}

export default CartWidget