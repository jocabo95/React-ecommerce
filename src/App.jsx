import NavBar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <>
      <BrowserRouter>
      
        <Routes>

          {/* navbar wrapper */}
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemListContainer />} />
          </Route>

          {/* 404 error */}
          <Route path="*" element={<h1>404 Page not found</h1>}/>

        </Routes>

      </BrowserRouter>
      {/* <NavBar />
      <ItemListContainer /> */}
    </>

  );

}


export default App;
