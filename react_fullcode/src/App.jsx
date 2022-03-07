import { useState } from 'react';
import './App.css';
import Btn from './Component/Btn';

function App() {
  const [toggleBtn,setToggleBtn] =  useState(false);
  const [value,setValue] =  useState("Salomlar");

return (<>
  <div className="app w-50 mx-auto">
    <Btn />
    <hr />
    <p>Value: {value}</p>
    <button 
            onClick={() => 
            setToggleBtn(!toggleBtn)}
            className="btn btn-secondary">
              Toggle Btn
              </button>
    <input type="text" className='form-control' value={value} onChange={event=> setValue(event.target.value)} />
    {toggleBtn ?
    <p className='lead'>
      Abdullajon shakarsan,
      shakar</p>
    :
    null}
  </div>
</>
);
}

export default App;