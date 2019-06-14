import React from 'react'
import { Container, Form } from 'react-bulma-components/full';
import './weatherInfo.scss'
import helpers from '../helpers/helpers'
import humidityIcon from '../../resources/humidity.png'
import windyIcon from '../../resources/windy.png'
import cloudiness from '../../resources/cloudiness.png'
import windDegree from '../../resources/windDegree.png'

const WeatherInfo = (props) => {

	let date = new Date(props.weather.date);
	let dateText = `${helpers.getDayOfWeekName(date.getDay())}, ${date.getDate()} ${helpers.getMonthName(date.getMonth())}`
	return (
		<div id="info" className="container weather-info">
			<h1 id="city">{props.weather.city}</h1>
			<h3 id="date">{dateText}</h3>
			<div id="card" className="columns is-centered">
				<div id="temperature" className="column has-text-centered vcenter">
					<p id="temp-c">{props.weather.temp_c}<sup id="supp">℃</sup></p>
					<p id="text">{props.weather.text}</p>
				</div>
				<div id="image" className="column vcenter">				
					<p className="infoNumbers "><img src={humidityIcon} alt="humidity" />{props.weather.humidity + '%'}</p>
					<p className="infoNumbers"><img src={windyIcon} alt="wind speed" />{props.weather.wind_kph + ' km/h'}</p>
					<p className="infoNumbers"><img src={windDegree} alt="wind temperature" />{props.weather.feelslike_c + ' ℃'}</p>
					<p className="infoNumbers"><img src={cloudiness} alt="cloudiness" />{props.weather.cloud + '%'}</p>
				</div>
			</div>  
		</div>
	);
}

export default WeatherInfo;