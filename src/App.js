import React, { Component } from 'react';
import './App.css';
import Header_Home from './headers/Header_Home';
import MainHome from './main/MainHome';
import MainShelf from './main/MainShelf';
import MainBin from './main/MainBin';
import MainRouter from './MainRouter';
import {Switch,Route,Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        
        <Header_Home />
        {MainRouter}
        
        {/* <MainBin /> */}
       
      
        {/* <MainHome />
        
        <MainShelf /> */}
        
       
      </div>
    );
  }
}

export default App;
