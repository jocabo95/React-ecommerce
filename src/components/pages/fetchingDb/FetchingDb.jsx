import { useEffect, useState } from "react"
import axios from "axios"

//SIN AXIOS
// const FetchingDb = () => {

//     const [products, setProducts] = useState([]);

//     useEffect(()=>{

//         let data = fetch("http://localhost:5000/products", {

//         });

//         data
//             .then((res)=>res.json())
//             .then((res)=>setProducts(res))
        
//     }, [])

//     console.log(products)
//   return (
//     <div>test backend</div>

//   )
// }

// export default FetchingDb

//CON AXIOS

const FetchingDb = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        let data = axios.get("http://localhost:5000/products", {

        });

        data 
            .then((res)=>setProducts(res.data))

    }, []);

    const createProd =()=>{
        let newProduct = {
          title: "PAPAS",
          price: 300000,
          stock: 2,
          description: "Black diamond",
          caterogry: "deportiva",
          img: "https://www.bfgcdn.com/1500_1500_90/319-0388/black-diamond-miniwire-quickpack-quickdraw.jpg",
        };

        let data = axios.post("http://localhost:5000/products", newProduct);

    }

    let id = 2;
    let newInfo = {
        title: "NUEVOOO",
        price: "GRATISSSS"
    }

    const modifyProd =(id, info)=>{

        axios.patch(`http://localhost:5000/products/${id}`, info );
    }

    console.log(products)
    return (
      <div>test backend
        <button onClick={createProd}>create prod</button>
        <button onClick={()=>modifyProd(id, newInfo)}>modify prod</button>
      </div>
    )
}

export default FetchingDb