import React, { Component } from 'react';
import './MainShelf.css';
import ShelfService from '../service/ShelfService.js';

export class MainShelf extends Component {
  constructor(props) {
    super(props);

    this.shelfService = new ShelfService();

    this.state = {
      ShelfId: this.props.match.params.id,
      Bins: []
    }

    this.getBins();
  }

  getBins() {
    this.shelfService.getBins(this.state.ShelfId)
    .then(response => this.setState({ Bins: response.data }))
    .catch(err => console.log(err));
  }

  render() {
    let binList = this.state.Bins.map(Bin => {
      return (
        <div>I am a bin</div>
      );
    });
    return (
      <div>
        {binList}
        <div className="shelf">
          <div className="shelf-text">
            <h1> bin 1 </h1>
          </div>
        </div>

      </div>
    )
  }
}

export default MainShelf
