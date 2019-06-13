import React from 'react'
import { Container, Form } from 'react-bulma-components/full';
import './weatherInfo.css'

function WeatherInfo (props){

	var getMonthName = (monthNumber) => {
		let months = {
			1: 'Enero',
			2: 'Febrero',
			3: 'Marzo',
			4: 'Abril',
			5: 'Mayo',
			6: 'Junio',
			7: 'Julio',
			8: 'Agosto',
			9: 'Septiembre',
			10: 'Octubre',
			11: 'Noviembre',
			12: 'Diciembre',
		}
		return months[monthNumber];
	}

	var getDayOfWeekName = (dayNumber) => {
		let daysOfWeek = {
			1: 'Lunes',
			2: 'Martes',
			3: 'Miércoles',
			4: 'Jueves',
			5: 'Viernes',
			6: 'Sábado',
			7: 'Domingo',
		}
		return daysOfWeek[dayNumber];
	}

	let date = props.weather.date;
	let dateText = ``

	return (
		<div id="info" class="container">
			<h1 id="city">{props.weather.city}</h1>
			<h3 id="date">{dateText}</h3>
			<div id="card" class="columns is-centered">
				<div id="image" class="column has-text-centered">
					<img src={props.weather.src} alt={props.weather.text}/>
					<p id="text">{dateText}</p>
				</div>
				<div id="temperature" class="column has-text-centered">
					<p id="temp-c">{props.weather.temp_c}</p>
					<p id="temp-f">{props.weather.temp_f}</p>
				</div>
				<div id="details" class="column has-text-centered">
					<p><strong>Humidity: </strong>{props.weather.humidity}</p>
					<p><strong>Feels like: </strong>{props.weather.feelslike_c}</p>
				</div>
			</div> 
		</div>
	);
}

export default WeatherInfo;