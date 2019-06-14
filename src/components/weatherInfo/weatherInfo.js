import React from 'react'
import { Container, Form } from 'react-bulma-components/full';
import './weatherInfo.css'
import humidityIcon from '../../resources/humidity.png'
import windyIcon from '../../resources/windy.png'
import cloudiness from '../../resources/cloudiness.png'
import windDegree from '../../resources/windDegree.png'

function WeatherInfo (props){

	var getMonthName = (monthNumber) => {
		let months = {
			0: 'January',
			1: 'February',
			2: 'March',
			3: 'April',
			4: 'May',
			5: 'June',
			6: 'July',
			7: 'August',
			8: 'September',
			9: 'October',
			10: 'November',
			11: 'December',
		}
		return months[monthNumber];
	}

	var getDayOfWeekName = (dayNumber) => {
		let daysOfWeek = {
			1: 'Monday',
			2: 'Tuesday',
			3: 'Wednesday',
			4: 'Thursday',
			5: 'Friday',
			6: 'Saturday',
			0: 'Sunday',
		}
		return daysOfWeek[dayNumber];
	}

	let date = new Date(props.weather.date);
	let dateText = `${getDayOfWeekName(date.getDay())}, ${date.getDate()} ${getMonthName(date.getMonth())}`
	return (
		<div id="info" className="container">
			<h1 id="city">{props.weather.city}</h1>
			<h3 id="date">{dateText}</h3>
			<div id="card" className="columns is-centered">
				<div id="temperature" className="column has-text-centered vcenter">
					<p id="temp-c">{props.weather.temp_c}<sup id="supp">℃</sup></p>
					<p id="text">{props.weather.text}</p>
					{/*<p id="temp-f">{props.weather.temp_f}<sup>℉</sup></p>*/}
				</div>
				<div id="image" className="column vcenter">				
					<p class="infoNumbers "><img src={humidityIcon} alt="humidity" />{props.weather.humidity + '%'}</p>
					<p class="infoNumbers"><img src={windyIcon} alt="wind speed" />{props.weather.wind_kph + ' km/h'}</p>
					<p class="infoNumbers"><img src={windDegree} alt="wind temperature" />{props.weather.feelslike_c + ' ℃'}</p>
					<p class="infoNumbers"><img src={cloudiness} alt="cloudiness" />{props.weather.cloud + '%'}</p>
				</div>
			</div>  
		</div>
	);
}

export default WeatherInfo;