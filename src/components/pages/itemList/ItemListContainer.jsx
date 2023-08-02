import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { db } from "../../../firebaseCofing";
import {getDocs,collection,query,where} from "firebase/firestore"



const ItemListContainer = () => {

  // crear variable para almacenar products
  const [items, setItems] = useState([]);

  const {name} = useParams();


  //useffect menajando FIREBASE
  useEffect(()=>{

    // consultar todos los prods para home
    let productsCollection = collection(db, "products");

    let consulta;

    //elegir que products renderizar dependiendo de variable name
    if(name){

      // prods a renderizar si hay categoria (si se hace afuera, name es undefined y se putea)
      consulta = query(productsCollection, where("category", "==", name));
    }else{
      consulta = productsCollection
    }

    // mamejo de promise que devuelve firebase
    getDocs(consulta).then((res)=>{
      let productos = res.docs.map((doc)=>{
        return {id: doc.id, ...doc.data()}
      })

      setItems(productos)
    })
  
      
  }, [name])

  //return temprano para cargar eskeleto de loading

  
  return <ItemList items={items}/>;
  

};

export default ItemListContainer;


//USEFFECT SIN FIREBASE
// useEffect(() => {
//   let filtradosCategoria = products.filter((el) => {
//     return el.category === name;
//   });

//   //crear promesa
//   const tarea = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(name === undefined ? products : filtradosCategoria);
//     }, 2000);
//   });

//   // manipular promesa(que hago con la resp de la promesa) .then() y .catch(). METODS ENCADENABLES
//   // .then() para resolve. .catch para reject
//   tarea.then((respuesta) => {
//     setItems(respuesta);
//   });
// }, [name]);
