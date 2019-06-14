import React from 'react'
import location from '../../resources/location.png'
import './quickCard.scss'

const QuickCard = (props) => {
	return (
		<button className="quick-card column">
			<img src={location} alt="location"/>
			<p>{props.city}</p>
		</button>
	);
}

export default QuickCard;