import React, { Component } from 'react';
import './App.css';
import Header from './headers/Header';
import ShelfList from './components/ShelfList/ShelfList';
import BinList from './components/BinList/BinList';
import Bin from './components/Bin/Bin';
import MainRouter from './MainRouter';
import {Switch,Route,Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        
        <Header />
        {MainRouter}
        
        {/* <MainBin /> */}
       
      
        {/* <MainHome />
        
        <MainShelf /> */}
        
       
      </div>
    );
  }
}

export default App;
