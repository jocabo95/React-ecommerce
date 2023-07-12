import Layout from "./components/layout/Layout";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemListContainer from "./components/pages/itemList/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <>
      <BrowserRouter>

        <Routes>

          {/* layout wrapper */}
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<h1>checkout</h1>}/>
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
          </Route>
          {/* 404 error */}
          <Route path="*" element={<h1>404 Page not found</h1>}/>

        </Routes>

      </BrowserRouter>
     
    </>

  );

}


export default App;
