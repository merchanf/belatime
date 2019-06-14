import React, {Component} from 'react';
import Axios from 'axios';
import WeatherInfo from '../weatherInfo/weatherInfo'
import WeatherCard from '../weatherCard/weatherCard'
import { Container, Form } from 'react-bulma-components/full';
import './App.scss';

class App extends Component {

  constructor(){
    super();
    this.state = {
      city : 'bogota',
      weather: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      weather: await this.getWeatherForecast(this.state.city)
    })
  }

  async componentDidMount(){
    this.setState({
      weather: await this.getWeatherForecast(this.state.city)
    })
  }

  async getWeatherInfoFromCityName(cityName){
    let response = await Axios.get(`http://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&q=${cityName}`);
    let data = response.data;
    return {
      city: data.location.name,
      date: new Date(data.location.localtime),
      src: data.current.condition.icon,
      text: data.current.condition.text,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      cloud: data.current.cloud,
      humidity: data.current.humidity,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      wind_kph: data.current.wind_kph,
    }
  }

  async getWeatherForecast(cityName){
    let response = await Axios.get(`http://api.apixu.com/v1/forecast.json?key=8c3c7daa94234a59bd7140955182012&q=${cityName}&days=7`);
    let data = response.data;

    let forecast = data.forecast.forecastday.map(f => ({
      date: f.date,
      src: f.day.condition.icon,
      text: f.day.condition.text,
      avgtemp_c: f.day.avgtemp_c
    }))

    return {
      city: data.location.name,
      date: new Date(data.location.localtime), 
      src: data.current.condition.icon,
      text: data.current.condition.text,
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      cloud: data.current.cloud,
      humidity: data.current.humidity,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      wind_kph: data.current.wind_kph,
      forecast: forecast
    }
  }

  render(){
    return (
      <div className="container app">
        <form className="is-centered" onSubmit={this.handleSubmit}>
          <input className="input" type="text" value={this.state.value} onChange={this.handleChange}/>
          <input className="input" type="submit" value="search" />
        </form>
        <WeatherInfo weather={this.state.weather} />
        <div className="columns">
          {
            typeof this.state.weather.forecast !== 'undefined'
             && this.state.weather.forecast.map((f,i) => <WeatherCard key={i} weather={f}/>)
          }
        </div>
      </div>
    );  
  }
}

export default App;
