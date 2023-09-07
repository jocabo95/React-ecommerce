import ListContainer from "../components/list/ListContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
import DetalleContainer from "../components/pages/detalle/DetalleContaier";

export const routes = [
  {
    id: "home",
    path: "/",
    // Element tiene que tener caps en primera para ser identificado como component
    Element: ListContainer,
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
    Element: ListContainer,
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
