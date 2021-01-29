import React, { useImperativeHandle } from 'react';
import pizzaman from '../imgs/pizzaman.jpg'
import {Link, useHistory} from 'react-router-dom'
const Form = () => {
  const history = useHistory();

  const submit = event =>{
      event.preventDefault();
      history.push('/confirmation')
  }
  return (
      <div className = 'form-div'>
          <img src = {pizzaman}/>
          <form className ='order-form' onSubmit = {submit}>
              <h2>Build your own pizza!</h2>
              <h2>Choice of Size</h2>
              <h3>Required</h3>
              <select name = 'size'>
                  <option value = ''>Select an option</option>
                  <option value = 'small'>Small-12in</option>
                  <option value = 'medium'>Medium-14in</option>
                  <option value = 'large'>Large-16in</option>
                  <option value = 'xlarge'>XLarge-18in</option>
              </select>
              <h2>Choice of Sauce</h2>
              <h3>Required</h3>
              <div className = 'sauce-div'>
                
                <label>
                    Original Red
                    <input type = 'radio'
                           name = 'sauce'
                           value = 'orignal-red'/>
                </label>
                <label>
                    Garlic Ranch
                    <input type = 'radio'
                           name = 'sauce'
                           value = 'garlic-ranch'/>
                </label>
                <label>
                    BBQ Sauce
                    <input type = 'radio'
                           name = 'sauce'
                           value = 'bbq-sauce'/>
                </label>
                <label>
                    Spinach Alfredo
                    <input type = 'radio'
                           name = 'sauce'
                           value = 'spinach-alfredo'/>    
                </label>
              </div>
              <h2>Add Toppings</h2>
              <h3>Choose up to 10</h3>
              <div className = 'toppings-div'>
                
                <label>
                  Pepperoni
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Sausage
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Canadian Bacon
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Spicy Italian Sausage
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Grilled Chicken
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Onions
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Green Pepper
                  <input type = 'checkbox'
                         name= 'topping'/>
                </label>
                <label>
                  Diced Tomatoes
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Black Olives
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Roasted Garlic
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Artichoke Hearts
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Three Cheese
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Pineapple 
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                <label>
                  Extra Cheese
                  <input type = 'checkbox'
                         name = 'topping'/>
                </label>
                
              </div>
              <div className = 'crust-div'>
                <h3>Gluten free crust</h3>
                <label class = 'switch'>
                  <input type = 'checkbox'/>
                  <span class = 'slider'></span>
                </label>
              </div>
              <h2>Special Instructions</h2>
              <div className = 'form-footer'>
                  <input type = 'number'
                         name = 'quantity'
                         id = 'quantity'
                         placeholder = '1'
                         min = '1'
                         max = '5'/>
                  <button className = 'confirmation-btn'>Add to Order 17.99</button>
              </div>
          </form>
          
      </div>
  );
};
export default Form;