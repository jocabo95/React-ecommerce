import ItemDetail from "../components/pages/ItemDetail/ItemDetail";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes =[
    {
        id: "home",
        path: "/",
        // Element tiene que tener caps en primera para ser identificado como component
        Element: ItemListContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "itemdetail",
        path: "/itemDetail/:id",
        Element: ItemDetail
    },
    {
        id: "category",
        path: "/category/:name",
        Element: ItemListContainer
    },
    {
        id: "checkout",
        path: "/checkout/:name",
        Element: CheckoutContainer
    }
]
