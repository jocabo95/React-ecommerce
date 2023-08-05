import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css"

const Cart = ({data}) => {

    let { cart, total, deleteById, limpiarCarrito } = data;

  return (
    <div id="cart">
      <div id="cart-container">
        <h2 id="cart-title" className="cart-text">
          Carrito
        </h2>
        {cart.map((el) => {
          return (
            <div id="cart-itemContainer" key={el.id}>
              <div id="cart-item">
                <img id="cart-img" src={el.img} />
                <div id="cart-prodInfo">
                  <h2 className="cart-text">{el.title}</h2>
                  <p className="cart-text">
                    <NumericFormat
                      value={el.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      suffix=" COP"
                    />
                  </p>
                  <p className="cart-text">Cantidad: {el.quantity}</p>
                  <button
                    style={{ border: "none", backgroundColor: "white" }}
                    className="cart-text"
                    onClick={() => deleteById(el.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </button>
                  <div />
                </div>
              </div>
            </div>
          );
        })}

        <p style={{marginBottom:"15px"}} id="total" className="cart-text">Total compra: {total}</p>

        <Link id="buyButton-link" to="/checkout" style={{textDecoration: "none"}}>
          <button style={{width: "100%"}} className="cartBuy-button">
            Finalizar compra
          </button>
        </Link>

        {/* condicional para solo mostrar "limpiar todo" cuando haya items en carrito */}
        {cart.length > 0 && (
          <button id="clearCart-button" onClick={limpiarCarrito}>Limpiar carrito</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
