import React, { Component } from 'react'
import './Main_Bin.css'

import { Link } from 'react-router-dom';

 class MainHome extends Component {
  constructor(props){
    super(props);

    this.state={
    
    }
  }

  render() {
    return (
      <div>
      
        
    
        <Link to='/bins/a' >
        
     
        <div className="shelf">
          <div className="shelf-text">
            <h1>Shelf A </h1>
          </div>
        </div>
        </Link>
        <Link to='/bins/b'>
        <div className="shelf">
        <div className="shelf-text">
            <h1>Shelf B </h1>
          </div>
        </div >
        </Link>
        <Link to='/bins/c'>
        <div className="shelf">
        <div className="shelf-text">
            <h1>Shelf C </h1>
          </div>
        </div>
        </Link>
        <Link to='/bins/d'>
        <div className="shelf">
        <div className="shelf-text">
            <h1>Shelf D </h1>
          </div>
        </div>
        </Link>
        
       


      </div>
    )
  }
}

export default MainHome
