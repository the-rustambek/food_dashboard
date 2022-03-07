import { useState } from "react";

export default function Btn  () {
  const [count,setCount] =  useState(0);
 
  
  function inc(){
    setCount(prev => prev+1)
  }

  function dec(){
    setCount(prev => prev-1)
  }

  return (
    <>
          <h3>
          Count: {count}</h3>
            <button className="
            btn btn-success" 
            onClick={inc}>
              Incr
            </button>
            
          
            <button className="
            btn btn-danger" 
            onClick={dec}>
              Incr
            </button> 

         
             
    </>
  )
}