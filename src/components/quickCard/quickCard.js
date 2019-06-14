import React, {Component} from 'react'
import location from '../../resources/location.png'
import './quickCard.scss'

class QuickCard extends Component{

	constructor(){
		super();
	}

	handleClick = (e, data) => {
		// access to e.target here
		this.props.changeCity(data.city);
	}

	render(){
		return (
			<button className="quick-card column" onClick={((e) => this.handleClick(e, this.props))}>
				<img src={location} alt="location"/>
				<p>{this.props.city}</p>
			</button>
		);
	}
} 

export default QuickCard;