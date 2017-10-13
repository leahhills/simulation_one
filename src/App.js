import React, { Component } from 'react';
import './App.css';
import Header_Home from './headers/Header_Home';
import MainBin from './main/MainBin';
import MainShelf from './main/MainShelf';
import MainCreate from './main/MainCreate';

class App extends Component {
  render() {
    return (
      <div>
        <Header_Home />
        <MainBin />
        <MainCreate />
        <MainShelf />
      </div>
    );
  }
}

export default App;
