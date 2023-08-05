import { NumericFormat } from "react-number-format";
import "./summary.css"

const Summary = ({data}) => {

    let { cart} = data;

  return (
    <div id="cart">
      <div id="cart-container">
        <h2 id="cart-title" className="cart-text">
          Resumen de compra
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
                  <div />
                </div>
              </div>
            </div>
          );
        })}

        
      </div>
    </div>
  );
}

export default Summary