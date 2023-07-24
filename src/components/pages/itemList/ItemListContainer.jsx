import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = () => {

  // crear variable para almacenar products
  const [items, setItems] = useState([]);

  const {name} = useParams();


  //useffect para manejar pedido a API. es muy pesado.
  useEffect(()=>{

    let filtradosCategoria = products.filter((el)=>{
      return el.category === name
    })
    //crear promesa
    const tarea = new Promise((resolve) => {
      resolve(name === undefined ? products : filtradosCategoria );
    });

    // manipular promesa(que hago con la resp de la promesa) .then() y .catch(). METODS ENCADENABLES
    // .then() para resolve. .catch para reject
    tarea
        .then((respuesta) => {setItems(respuesta)})
      
  }, [name])

  return <ItemList items={items}/>;
};

export default ItemListContainer;
