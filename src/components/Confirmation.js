import React from 'react';
import PizzaDog from '../imgs/pizzadog.gif'

const Confirmation = () => {
  return (
    <div className ='confirmation-div'>
        <div className = 'banner' >
            <h1>Congrats pizza is on its way</h1>
        </div>
        <h2>Enjoy this pizza pup</h2>
        <img src = {PizzaDog}/>
        
    </div>
  );
};
export default Confirmation;