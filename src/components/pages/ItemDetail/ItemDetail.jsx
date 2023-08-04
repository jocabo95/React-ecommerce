import { Skeleton } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer"
import "./itemDetail.css"
import { NumericFormat } from "react-number-format";

const ItemDetail = ({data}) => {
  const arr = [1, 2, 3, 4];

  // data se tiene que destructurar por furea de props
  const {producto, onAdd, totalQuantity} = data;

  return (
    <div id="itemDetail">
      {/* render condicional para cuando producto no se actualice de db */}
      {producto ? (
        <div id="itemDetail-card">
          <div id="itemDetail-imgContainer">
            <img
              id="itemDetail-img"
              src={producto.img}
              alt="producto.descripcion"
            />
          </div>

          <div id="itemDetail-description">
            <h1 className="cardText" id="itemDetail-title">
              {producto.title}
            </h1>
            <p className="cardText" id="itemDetail-brand">
              {producto.description}
            </p>
            <p className="cardText" id="itemDetail-price">
              <NumericFormat
                value={producto.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                suffix=" COP"
              />
            </p>
          </div>

          {/* mostrar counter solo si hay stock */}
          {producto.stock > 0 ? (
            <CounterContainer
              stock={producto.stock}
              onAdd={onAdd}
              initialQuantity={totalQuantity}
            />
          ) : (
            <h5>Sin stock</h5>
          )}
        </div>
      ) : (
        // si producto === undefined
        arr.map((el) => {
          return (
            <div key={el}>
              <Skeleton variant="rectangular" sx={{ fontSize: "3rem" }} />
              <Skeleton variant="text" width={90} height={40} />
              <Skeleton variant="text" width={210} height={60} />
              <Skeleton variant="text" width={210} height={60} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default ItemDetail

//USEFFECT SIN FIREBASE
// useEffect(() => {
//   let productoSeleccionado = products.find((elemento) => {
//     return elemento.id === +id;
//   });

//   const tarea = new Promise((res, rej) => {
//     res(productoSeleccionado);
//   });

//   tarea.then((res) => setProducto(res));
// }, [id]); 