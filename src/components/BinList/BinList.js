import React, { Component } from 'react';
import './BinList.css';
import ShelfService from '../../service/ShelfService.js';
import { Link } from 'react-router-dom';

export class BinList extends Component {
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

  goToBinItem() {
    console.log('lets go to a bin item');
  }

  render() {
  
    
    let binList = this.state.Bins
    .sort((a, b) => a.binname > b.binname)
    .map(Bin => {
      let binName = Bin.binitemname ? Bin.binname : '+ Add To Inventory';
      return (
        <div key={Bin.binid} className="shelf">
          <Link className="no-dec" to={'/bin/'+ Bin.binid}>
            <div className="shelf-text">
              <h1> { binName } </h1>
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div>
        
        {binList}
        

      </div>
    )
  }
}

export default BinList
