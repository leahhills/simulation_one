import React, { Component } from 'react'
import './Main_Bin.css'

export class MainBin extends Component {
  render() {
    return (
      <div>
        <div className="shelf">
          <div className="shelf-text">
            <h1>Shelf A </h1>
          </div>
        </div>
        <div className="shelf">
        <div className="shelf-text">
            <h1>Shelf B </h1>
          </div>
        </div >
        <div className="shelf">
        <div className="shelf-text">
            <h1>Shelf C </h1>
          </div>
        </div>
        <div className="shelf">
        <div className="shelf-text">
            <h1>Shelf D </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default MainBin
