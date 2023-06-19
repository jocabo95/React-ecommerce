import {BsCart} from "react-icons/bs"
import { Badge } from "@mui/material"

const CartWidget = () => {
  return (
    <div>

        <Badge badgeContent={1} color="primary">
            <BsCart color="white" />
        </Badge>

    </div>
  )
}

export default CartWidget