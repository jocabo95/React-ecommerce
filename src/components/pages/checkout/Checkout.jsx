import { Link } from "react-router-dom";
import "./checkout.css"

import SummaryContainer from "../../common/summary/SummaryContainer";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Checkout = ({info}) => {

    const { data, orderId, handleChange, handleSubmit } = info;
    const {clearCart} = useContext(CartContext)
    

  return (
    <div id="checkout">
      <div id="checkout-container">
        <h1 id="checkout-title">Checkout</h1>
        {orderId !== "" ? (
          <div id="comprobante-container">
            <div id="comprobante">
              <p className="checkout-text">Gracias por su compra</p>
              <p className="checkout-text">
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  numero de seguimiento:{" "}
                </span>
                {orderId}
              </p>
              <SummaryContainer />
            </div>
            <Link id="compra-button" style={{ textDecoration: "none" }} to="/">
              <button onClick={()=>clearCart} className="checkout-button">Seguir comprando</button>
            </Link>
          </div>
        ) : (
          <form id="checkout-form" onSubmit={handleSubmit}>
            <input
              className="checkout-input"
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            <p>{data.nombre}</p>
            <input
              className="checkout-input"
              type="text"
              placeholder="312 457 2092"
              name="phone"
              onChange={handleChange}
            />
            <input
              className="checkout-input"
              type="email"
              placeholder="james.smith@gmail.com"
              name="email"
              onChange={handleChange}
            />
            <button className="checkout-button" type="submit">
              Finalizar compra
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkout;
