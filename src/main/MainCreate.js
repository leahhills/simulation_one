import React, { Component } from 'react'
import './Main_Create.css'
export class MainCreate extends Component {
  render() {
    return (
      <div className="containers">
        <div>
        <p> Name </p>
          <input placeholder="name here" />
        
        <p> Price </p>
        <input placeholder="price here" />
        </div>
        <div className="button">
          <button> Edit </button>
          <button> Delete </button>
        </div>
      </div>
    )
  }
}

export default MainCreate
