import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './PortfolioContainer/Home/Home';
class App extends Component {
  render(){
    return (  
      <div>
        <Home />
      </div>
      
  )}
}


export default App;
