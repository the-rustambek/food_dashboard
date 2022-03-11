import { useState } from "react";
import { createContext } from "react";

const Context = createContext();

function Provider({children}){
  const [orderFoods,setOrderFoods] = 
  useState([]);
  return (
    <Context.Provider 
    value={{orderFoods, setOrderFoods}} >
      {children}
      </Context.Provider>
  )
}

export {Context,Provider}