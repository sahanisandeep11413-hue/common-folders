import { createContext, useState } from "react";

export let MyShop = createContext();

export const MyShopeContextProvider = ({children}) =>{
     const [isCartOpen, setIsCartOpen] = useState(false);
     const [cartItem, setCartItem] = useState([]);

   return <MyShop.Provider value={{isCartOpen, 
    setIsCartOpen, cartItem, setCartItem
   }}>{children}</MyShop.Provider>
}