import React, { useImperativeHandle } from 'react';
import pizzaman from '../imgs/pizzaman.jpg'
import {useHistory} from 'react-router-dom'
const Form = (props) => {
  const {values, submit, change, disabled, errors} = props;
  console.log(values);
  const history = useHistory();
  
  const onSubmit = event =>{
      event.preventDefault();
      submit();
      history.push('/confirmation')
  }
  const onChange = event => {
      const {name, value, type, checked} = event.target;
      change(name, type === 'checkbox' ? checked : value);
  }
  return (
      <div className = 'form-div'>
          <img src = {pizzaman}/>
          <form className ='order-form' onSubmit = {onSubmit}>
              <h2>Build your own pizza!</h2>
              <h2>Choice of Size</h2>
              <h3>Required</h3>
              <select name = 'size' value = {values.size} onChange ={onChange}>
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
                           value = 'original-red'
                           checked = {values.sauce === 'original-red'}
                           onChange = {onChange}/>
                </label>
                <label>
                    Garlic Ranch
                    <input type = 'radio'
                           name = 'sauce'
                           value = 'garlic-ranch'
                           checked = {values.sauce === 'garlic-ranch'}
                           onChange = {onChange}/>
                </label>
                <label>
                    BBQ Sauce
                    <input type = 'radio'
                           name = 'sauce'
                           value = 'bbq-sauce'
                           checked = {values.sauce === 'bbq-sauce'}
                           onChange = {onChange}/>
                </label>
                <label>
                    Spinach Alfredo
                    <input type = 'radio'
                           name = 'sauce'
                           value = 'spinach-alfredo'
                           checked = {values.sauce === 'spinach-alfredo'}
                           onChange = {onChange}/>    
                </label>
              </div>
              <h2>Add Toppings</h2>
              <h3>Choose up to 10</h3>
              <div className = 'toppings-div'>
                
                <label>
                  Pepperoni
                  <input type = 'checkbox'
                         name = 'pepperoni'
                         checked = {values.pepperoni}
                         onChange = {onChange}/>
                </label>
                <label>
                  Sausage
                  <input type = 'checkbox'
                         name = 'sausage'
                         checked = {values.sausage}
                         onChange = {onChange}/>
                </label>
                <label>
                  Canadian Bacon
                  <input type = 'checkbox'
                         name = 'canadianBacon'
                         checked = {values.canadianBacon}
                         onChange = {onChange}/>
                </label>
                <label>
                  Spicy Italian Sausage
                  <input type = 'checkbox'
                         name = 'spicyItalianSausage'
                         checked = {values.spicyItalianSausage}
                         onChange = {onChange}/>
                </label>
                <label>
                  Grilled Chicken
                  <input type = 'checkbox'
                         name = 'grilledChicken'
                         checked = {values.grilledChicken}
                         onChange = {onChange}/>
                </label>
                <label>
                  Onions
                  <input type = 'checkbox'
                         name = 'onions'
                         checked = {values.onions}
                         onChange = {onChange}/>
                </label>
                <label>
                  Green Pepper
                  <input type = 'checkbox'
                         name= 'greenPepper'
                         checked = {values.greenPepper}
                         onChange = {onChange}/>
                </label>
                <label>
                  Diced Tomatoes
                  <input type = 'checkbox'
                         name = 'dicedTomatoes'
                         checked = {values.dicedTomatoes}
                         onChange = {onChange}/>
                </label>
                <label>
                  Black Olives
                  <input type = 'checkbox'
                         name = 'blackOlives'
                         checked = {values.blackOlives}
                         onChange = {onChange}/>
                </label>
                <label>
                  Roasted Garlic
                  <input type = 'checkbox'
                         name = 'roastedGarlic'
                         checked = {values.roastedGarlic}
                         onChange = {onChange}/>
                </label>
                <label>
                  Artichoke Hearts
                  <input type = 'checkbox'
                         name = 'artichokeHearts'
                         checked = {values.artichokeHearts}
                         onChange = {onChange}/>
                </label>
                <label>
                  Three Cheese
                  <input type = 'checkbox'
                         name = 'threeCheese'
                         checked = {values.threeCheese}
                         onChange = {onChange}/>
                </label>
                <label>
                  Pineapple 
                  <input type = 'checkbox'
                         name = 'pineapple'
                         checked = {values.pineapple}
                         onChange = {onChange}/>
                </label>
                <label>
                  Extra Cheese
                  <input type = 'checkbox'
                         name = 'extraCheese'
                         checked = {values.extraCheese}
                         onChange = {onChange}/>
                </label>
                
              </div>
              <div className = 'crust-div'>
                <h3>Gluten free crust</h3>
                <label class = 'switch'>
                  <input type = 'checkbox' name = 'sub' checked = {values.sub} onChange = {onChange}/>
                  <span class = 'slider'></span>
                </label>
              </div>
              <h2>Special Instructions</h2>
              <input type = 'text' name = 'specialInstructions' placeholder = "Anything else you'd like to add?" value = {values.specialInstructions} onChange = {onChange}/>
              <div className = 'form-footer'>
                  <input type = 'number'
                         name = 'itemCount'
                         id = 'quantity'
                         placeholder = '1'
                         min = '1'
                         max = '5'
                         value = {values.itemCount}
                         onChange = {onChange}/>
                  <button className = 'confirmation-btn' disabled = {disabled}>Add to Order ${Math.round((values.itemCount * 17.99)*100)/100}</button>
              </div>
          </form>
          
      </div>
  );
};
export default Form;