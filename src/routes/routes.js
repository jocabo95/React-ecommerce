import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
import DetalleContainer from "../components/pages/detalle/DetalleContaier";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    // Element tiene que tener caps en primera para ser identificado como component
    Element: ItemListContainer,
  },
  {
    id: "itemdetail",
    path: "/itemDetail/:id",
    Element: DetalleContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "category",
    path: "/category/:name",
    Element: ItemListContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
];
