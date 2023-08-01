"use client";
import { FC, ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducer";

export const cartContext = createContext<any>(null);

const ContextWrapper: FC<{ children: ReactNode }> = ({children}) => {
  const starter = {
    cart : [
      {
        productId : "",
        quantity : 2 
      },
    ],
  }

  const [state, dispatch] = useReducer(cartReducer,starter);
  
  useEffect(() => {
    let cart = localStorage.getItem("cart") as string;
    if (cart == null) {
      localStorage.setItem("cart", state.cart);
    } {/*else {
      starter.cart = JSON.parse(cart);
    }*/}
  });

  useEffect(() => {
    localStorage.setItem("cart", state.cart);
  }, [state.cart]);

  return (
    <cartContext.Provider value={{state, dispatch}}>
      {children}
    </cartContext.Provider>
    );
};

export default ContextWrapper