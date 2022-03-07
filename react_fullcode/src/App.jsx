
import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] =  useState(0);
  const [toggleBtn,setToggleBtn] =  useState(false);
  function inc(){
    setCount(prev => prev+1)
  }

  function dec(){
    setCount(prev => prev-1)
  }

  return (<>
      <div className="app w-50 mx-auto">
        <h3>
          Count: {count}</h3>
          
            <button className="
            btn btn-success" 
            onClick={inc}>
              Incr
            </button>
            {/* <h3>
          Count: {count}</h3>
          
            <button className="
            btn btn-success" 
            onClick={dec}>
              Incr
            </button> */}

            <button 
            onClick={() => setToggleBtn(!toggleBtn)}
            className="btn btn-secondary">
              Toggle Btn
              </button>
              {toggleBtn ? <p className='lead'>Abdullajon shakarsan, shakar</p> : null}
          </div>
     </>
  );
}

export default App;
