import React, { Component } from 'react';
import './BinEmptyFull.css' ;
import ShelfService from '../../service/ShelfService';

export default class BinEmptyFull extends Component {
    constructor(props){
        super(props);
    
        this.shelfService = new ShelfService();

        this.state = {
            Bins: []
        }

        this.getAllBins();
    }

    getAllBins(){
        this.shelfService.getAllBins()
        .then((response) => {
            console.log(response.data);
            this.setState({Bins:response.data});
        })
        .catch(err => console.log(err));
    }

    render() {
        let fullBins = this.state.Bins
        .map((bin) => {
            if(bin.binitemname) {
                return <div key={bin.binid} className="bin green">{bin.binid} {bin.binitemname}</div>
            }
        });
        let emptyBins = this.state.Bins
        .map((bin) => {
            if(!bin.binitemname) {
                return <div key={bin.binid} className="bin blue">{bin.binid} Empty Item</div>
            }
        });
        return(
            <div>
                {fullBins}
                {emptyBins}
            </div>
        );
    }

}

