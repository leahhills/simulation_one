import React, { Component } from 'react';
import './MainShelf.css';


export class MainShelf extends Component {
  render() {
    return (
      <div>
        
        <div className="shelf">
          <div className="shelf-text">
            <h1> bin 1 </h1>
          </div>
        </div>
        <div className="shelf">
        <div className="shelf-text">
            <h1>  bin 2 </h1>
          </div>
        </div >
        <div className="shelf">
        <div className="shelf-text">
            <h1> bin 3 </h1>
          </div>
        </div>
        <div className="shelf">
        <div className="shelf-text">
            <h1> bin  4</h1>
          </div>
        </div>
        <div className="shelf">
        <div className="shelf-text">
            <h1> bin  5</h1>
          </div>
        </div>

        </div>

    )
  }
}

export default MainShelf
