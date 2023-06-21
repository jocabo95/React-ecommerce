import NavBar from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/ItemList";
import { useState } from "react";
import Counter from "./components/common/counter/Counter";

function App() {

  let [saludo, setSaludo] = useState ("")

  let saludoUsuario = (greet) =>{
    setSaludo(greet)
  }

  return (

    <div>
      <ItemList saludo={saludo} saludoUsuario={saludoUsuario} />
      <Counter />
    </div>

  );

}


export default App;
