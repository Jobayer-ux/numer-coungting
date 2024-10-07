import React from 'react'
import { useState } from 'react';
import './CountingApp.css'
const CountingApp = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [showPopup, setShowPopup] = useState(false);
  const handleShowTotal = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <div className='counting'>
            <div>
                <div className="mango">
                    <h3>Mango</h3>
                    <h4>{count1}</h4>
                </div>
                <button onClick={() => setCount1(count1 + 1)}>Button</button>
            </div>
            <div>
                <div className="orange">
                    <h3>Orange</h3>
                    <h4>{count2}</h4>
                </div>
                <button onClick={() => setCount2(count2 + 1)}>Button</button>
            </div>
            <div>
                <div className="apple">
                    <h3>Apple</h3>
                    <h4>{count3}</h4>
                </div>
                <button onClick={() => setCount3(count3 + 1)}>Button</button>
            </div>
      </div>
      <button onClick={handleShowTotal}>Show Total</button>

     
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Total Count -</h3>
            <p>mango : {count1}</p>
            <p>orange : {count2}</p>
            <p> apple : {count3}</p>
            <hr />
            <h3>Total</h3>
            <h1>Total: {count1 + count2 + count3}</h1>
            <button onClick={() => setShowPopup(false)}>
                
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="icon" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>  </button>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default CountingApp
