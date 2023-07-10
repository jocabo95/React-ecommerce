// import NavBar from "./components/layout/navbar/Navbar";
// import ItemList from "./components/pages/itemList/ItemList";
import { useState } from "react";

// CONFIGURAR ROUTING

import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemList from "./components/pages/itemList/ItemList"
import Layout from "./components/layout/Layout";

function App() {

  let [saludo, setSaludo] = useState ("")

  let saludoUsuario = (greet) =>{
    setSaludo(greet)
  }

  return (

    // <div>
    //   <NavBar />
    //   <ItemList saludo={saludo} saludoUsuario={saludoUsuario} />
    // </div>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<ItemList saludo={saludo} saludoUsuario={saludoUsuario}/>} /> 
          <Route path="/pages" element={<h1>PAFES</h1>} />
        </Route>

        <Route path="*" element={<h1>404 Page not found</h1>}/>
      
      </Routes>
    </BrowserRouter>

  );

}


export default App;
