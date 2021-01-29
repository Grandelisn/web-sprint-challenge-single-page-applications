import React from 'react';
import Pizza from './Pizza'
import PizzaDog from '../imgs/pizzadog.gif'

const Confirmation = (props) => {
    const {details} = props;
  return (
    <div className ='confirmation-div'>
        <div className = 'banner' >
            <h1>Congrats pizza is on its way</h1>
        </div>
        <div className = 'confirm-container'>
            {details.map(pizza => {
                return(<Pizza data = {pizza} key = {pizza.id}/>)
            })}
        </div>
        <h2>Enjoy this pizza pup</h2>
        <img src = {PizzaDog}/>
        
    </div>
  );
};
export default Confirmation;