import { products } from "../../../productsMock"
import {addDoc, collection} from "firebase/firestore"
import { db } from "../../../firebaseCofing"

const Dashboard = () => {

    const rellenar = () =>{

        products.forEach((product)=>{

            addDoc(collection(db, "products"), product)

        })
    }


  return (
    <div>
        <button onClick={rellenar}>Rellenar base de datos</button>
    </div>
  )
}

export default Dashboard