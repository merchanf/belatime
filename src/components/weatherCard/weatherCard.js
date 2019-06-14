import React from 'react'
import helpers from '../helpers/helpers'
import './weatherCard.scss'

const WeatherCard = (props) => {
	let date = new Date(props.weather.date);
	return(
		<div className="weather-card column">
			<p>{`${date.getDate()} ${helpers.getMonthName(date.getMonth())}`}</p>
			<p>{helpers.getDayOfWeekName(date.getDay())}</p>
			<img src={props.weather.src} alt={props.weather.text}/>
			<p id="temp-c">{props.weather.avgtemp_c}<sup>℃</sup></p>
		</div>
	);
}
	
export default WeatherCard;