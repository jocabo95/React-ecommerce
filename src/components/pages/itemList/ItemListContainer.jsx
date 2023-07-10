import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  // crear variable para almacenar products
  const [items, setItems] = useState([]);

  //useffect para manejar pedido a API. es muy pesado
  useEffect(()=>{
    //crear promesa
    const tarea = new Promise((resolve) => {
      resolve(products);
    });

    // manipular promesa(que hago con la resp de la promesa) .then() y .catch(). METODS ENCADENABLES
    // .then() para resolve. .catch para reject
    tarea
        .then((respuesta) => {setItems(respuesta)})
      
  }, [])

  return <ItemList items={items}/>;
};

export default ItemListContainer;
