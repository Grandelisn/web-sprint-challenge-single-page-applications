import React, {useState, useEffect} from "react";
import {Link, Route, Switch} from 'react-router-dom'
import Form from './components/Form'
import './App.css'
import Home from './components/Home'
import Confirmation from "./components/Confirmation";



const App = () => {
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
            <Route path = {'/form'} component = {Form}/>
            <Route path = {'/confirmation'} component = {Confirmation}/>
            <Route path = {'/'} component = {Home}/>
      </Switch>
      
    </div>
  );
};
export default App;
