import Layout from "./components/layout/Layout";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import CartContainer from "./components/pages/cart/CartContainer";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";

function App() {

  return (

    <>
      <BrowserRouter>
        <CartContextProvider>

          <Routes>

            {/* layout wrapper */}
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetail />} />
              <Route path="/category/:name" element={<ItemListContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
            </Route>
            
            {/* 404 error */}
            <Route path="*" element={<h1>404 Page not found</h1>}/>

          </Routes>

        </CartContextProvider>

      </BrowserRouter>
     
    </>

  );

}


export default App;
