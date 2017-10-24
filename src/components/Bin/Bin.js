import React, { Component } from 'react'
import './Bin.css'
import ShelfService from '../../service/ShelfService.js';
import { Redirect } from 'react-router-dom';

export class Bin extends Component {
	constructor(props) {
		super(props);

		this.shelfService = new ShelfService();

		this.state = {
			BinId: this.props.match.params.id,
			Bin: { },
			IsEditing: false,
			GoBack: false
		}

		this.getBin(this.state.BinId);
		// the stuff below allows us to use 'this' inside those functions to reference stuff inside this constructor (specifically we are concerned with referencing this.state inside those functions by simply using this.state)
		this.editButtonHandler = this.editButtonHandler.bind(this);
		this.saveButtonHandler = this.saveButtonHandler.bind(this);
		this.deleteButtonHandler = this.deleteButtonHandler.bind(this);
		this.onChangeBinItemName = this.onChangeBinItemName.bind(this);
		this.onChangeBinItemPrice = this.onChangeBinItemPrice.bind(this);
	}

	onChangeBinItemName(event) {
		console.log('Changing Bin Item Name');
		let Bin = this.state.Bin;
		Bin.binitemname = event.target.value;
		this.setState({ Bin: Bin });
	}

	onChangeBinItemPrice(event) {
		console.log('Changing Bin Item Price');
		let Bin = this.state.Bin;
		Bin.binitemprice = event.target.value;
		this.setState({ Bin: Bin });
	}

	getBin(BinId) {
		this.shelfService.getBin(BinId)
		.then(response => {
			let Bin = response.data[0];
			if(!Bin.binitemname)
				Bin.binitemname = '';
			if(!Bin.binitemprice)
				Bin.binitemprice = 0;
			this.setState({Bin: response.data[0]});
			console.log(this.state.Bin);
		}) 
		.catch(err => console.log(err));
	};

	editButtonHandler() {
		this.setState({ IsEditing: true });
	}

	deleteButtonHandler() {
		let Bin = this.state.Bin;
		Bin.binitemname = null;
		Bin.binitemprice = null;
		this.setState({ Bin: Bin });
		this.shelfService.updateBin(this.state.BinId, Bin)
		.then(response => {
			console.log(response)
			this.setState({ GoBack: true });
		})
		.catch(err => console.log(err));
	}

	saveButtonHandler() {
		this.shelfService.updateBin(this.state.BinId, this.state.Bin)
		.then((response) => {
			console.log(response);
			this.setState({ GoBack: true });
		})
		.catch((err) => {
			console.log(err)
			this.setState({ GoBack: true });
		});
	}

	render() {
		if(this.state.GoBack)
			return(<Redirect push to={'/bins/'+ this.state.Bin.shelfid}/>)

		let binData;
		if (this.state.IsEditing) {
			binData = (
				<div>
					
					<p>
						<input value={this.state.Bin.binitemname} onChange={this.onChangeBinItemName} placeholder="Enter Bin Name"/>
					</p>
					<p>
						<input type="number" value={this.state.Bin.binitemprice} onChange={this.onChangeBinItemPrice} placeholder="Enter Bin Name"/>
					</p>
					<div className="button">
						<button onClick={this.saveButtonHandler}>Save</button>
						<button onClick={this.deleteButtonHandler}>Delete</button>
					</div>
				</div>
			)
		} else {
			binData = (
				<div>
					
					<p> Name: {this.state.Bin.binitemname || 'N/A'} </p>
					<p> Price: {this.state.Bin.binitemprice || 'N/A'}</p>
					<div className="button">
						<button className = "edit" onClick={this.editButtonHandler}>Edit</button>
						<button className = "delete" onClick={this.deleteButtonHandler}>Delete</button>
					</div>
				</div>
			)
		}
		return (
			<div className="containers">
			{binData}
			</div>
		)
	}
}

export default Bin
