import NavBar from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/ItemList";
import { useState } from "react";


function App() {

  let [saludo, setSaludo] = useState ("")

  let saludoUsuario = (greet) =>{
    setSaludo(greet)
  }

  return (

    <div>
      <NavBar />
      <ItemList saludo={saludo} saludoUsuario={saludoUsuario} />
    </div>

  );

}


export default App;
