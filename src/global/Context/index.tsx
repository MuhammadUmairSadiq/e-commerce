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

  useEffect(()=>{
    localStorage.setItem("cartState: ", JSON.stringify(state));
  },[state])
  
  return (
    <cartContext.Provider value={{state, dispatch}}>
      {children}
    </cartContext.Provider>
    );
};

export default ContextWrapper