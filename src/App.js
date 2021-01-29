import React, {useState, useEffect} from "react";
import axios from 'axios'
import schema from './validation/formSchema'
import {Link, Route, Switch} from 'react-router-dom'
import Form from './components/Form'
import './App.css'
import Home from './components/Home'
import Confirmation from "./components/Confirmation";
import * as yup from 'yup'

const initFormVal = {
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  sub: false,
  specialInstructions: '',
  itemCount: '',
}
const initFormErr = {
  size: '',
  sauce: '',
  itemCount: '',
  
}
const initVal = [];
const initDis = true;

const App = () => {
  const [val, setVal] = useState(initVal);
  const [formVal, setFormVal] = useState(initFormVal);
  const [formErr, setFormErr] = useState(initFormErr);
  const [dis, setDis] = useState(initDis);
  
  const postOrder = newOrder =>{
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setVal([res.data, ...val]);
      setFormVal(initFormVal);
    }).catch(err => console.log(err))
    .finally(()=> setFormVal(initFormVal));
  }
  const inputChange = ( name, value ) => {
    yup.reach( schema, name)
     .validate( value )
     .then( () => {
       setFormErr( {
         ...formErr,
         [ name ]: "",
       } )
     } )
     .catch( err => {
       setFormErr( {
         ...formErr,
         [ name ]: err.errors[ 0 ],
       } )
     } )
     setFormVal({
       ...formVal,
       [ name ]: value,
     } )
  }
  const formSubmit = () => {
    const newOrder = {
      size: formVal.size.trim(),
      sauce: formVal.sauce.trim(),
      toppings: ['pepperoni', 'sausage', 'canadian bacon', 'spicy italian sausage', 'grilled chicken', 'onions', 'green pepper', 'diced tomatoes', 'black olives', 'roasted garlic', 'artichoke hearts', 'three cheese', 'pineapples', 'extra cheese'].filter(topping => formVal[topping]),
    }
    postOrder(newOrder);
  }
  useEffect( () => {
    schema.isValid(formVal).then(valid => setDis(!valid))
  },[formVal])

  return (
    <div className ='main-div'>
      <div className = 'banner-div'>
            <h1>Lambda Eats</h1>
            <div className = 'nav-links'>
                <Link to = '/'>Home</Link>
                <Link to = '/form'>Order</Link>
            </div>
      </div>
      <Switch>
            <Route path = {'/form'}>
              <Form 
              values = {formVal}
              change = {inputChange}
              submit = {formSubmit}
              disabled = {dis}
              errors = {formErr}/> 
            </Route>
            <Route path = {'/confirmation'}>
              <Confirmation details = {val}/>
            </Route> 
            <Route path = {'/'} component = {Home}/>
      </Switch>
      
    </div>
  );
};
export default App;
