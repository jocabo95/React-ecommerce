import { createContext, useState } from "react"

// 1. crear un contexto y exportar
export const CartContext = createContext();

// 2. crear componente de contexto (nombre no puede ser igual a contexto)

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]); // cart son todos los items que estan en carrito

  // anade prod a carrito
  const addToCart = (item) => {
    const existe = isInCart(item.id);

    if (existe) {
      let newCart = cart.map((el) => {
        if (el.id === item.id) {
          return { ...el, quantity: item.quantity };
        } else {
          return el;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  // check si carrito ya tiene item que estoy agregando
  const isInCart = (id) => {
    let check = cart.some((el) => {
      return el.id === id;
    });
    return check;
  };

  //borrar todos los items del carrito
  const clearCart = () => {
    setCart([]);

  };

  // borrar solo 1 producto de carrito
  const deleteById = (id) => {
    console.log("id", id);

    let newArr = cart.filter((el) => {
      return el.id !== id;
    });

    setCart(newArr);
  };

  const totalPrice = () =>{
    let total = cart.reduce((acc, el)=>{
      return acc + (el.price * el.quantity)
    }, 0)
    return total
  }

  const unidadesTotales = ()=>{
    const total = cart.reduce ((acc, el)=>{
      return acc + el.quantity
    }, 0)
    return total
  }

  // determinar un en carrito de producto para evitar sobrepasar stock por doble adicion
  const getQuantityById =(id)=>{

    const product = cart.find((el)=> el.id === id)
    return product ? product.quantity : 1 //si product es truthy sacar quantity {else} product counter empieza en 1
  
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    totalPrice,
    unidadesTotales,
    getQuantityById
  }; //forma m[as efectiva de pasar info a children]

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextProvider


// en return se debe agrgar el metodo .provider al contexto que se va a exportar (CartContext)
// <CartContext/> debe ser wrapper de todos mis paths en .app
// PARA MAS CONTEXTOS, SE USA IGUAL. TODOS DEBEN SER WRAPPERS DE LOS PATHS