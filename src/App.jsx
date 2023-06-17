import Home from "./components/pages/home/home";
import ItemList from "./components/pages/itemList/ItemList";
import { useState } from "react";

function App() {

  let [saludo, setSaludo] = useState("hola, como estas")

  const nuevoSaludo = (nuevoSal) => {
    setSaludo(nuevoSal)
  }

  return (

    <div>
      <Home />
      <ItemList 
      saludo={saludo} 
      nuevoSaludo={nuevoSaludo}
      persona={{nombre: "jose", edad:27}} 
      />
      <h2>{saludo}</h2>
    </div>

  );
}


export default App;
