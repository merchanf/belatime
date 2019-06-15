import React, {Component} from 'react';
import Axios from 'axios';
import WeatherInfo from '../weatherInfo/weatherInfo'
import WeatherCard from '../weatherCard/weatherCard'
import QuickCard from '../quickCard/quickCard'
import Error from '../error/error'
import './App.scss';
import helpers from '../helpers/helpers';

class App extends Component {

  constructor(){
    super();
    this.state = {
      city : 'bogota',
      weather: '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  async handleChange(event) {
    let city = event.target.value
    if(city === '')
      city = 'bogota'
    this.setState({
      weather: await this.getWeatherForecast(city)
    })
  }
  async changeCity(city){
    
    this.setState({
      weather: await this.getWeatherForecast(city)
    })
  }

  async componentDidMount(){
    this.setState({
      weather: await this.getWeatherForecast(this.state.city)
    })
  }
 
  async getWeatherForecast(cityName){
    let weather, forecast;
    try {    
      let response = await Axios.get(`http://api.apixu.com/v1/forecast.json?key=8c3c7daa94234a59bd7140955182012&q=${cityName}&days=7`);
      let data = response.data;
    
      forecast = data.forecast.forecastday.map(f => ({
        date: f.date,
        src: f.day.condition.icon,
        text: f.day.condition.text,
        avgtemp_c: f.day.avgtemp_c
      }))
  
      weather = {
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
    } catch (error) {
       this.setState({
         error: true
       }) 
    }

    this.setState({
      error: false
    }) 
    return weather;
  }

  render(){
    let weather;
    if(!this.state.error && this.state.weather !== undefined && this.state.weather.forecast !== undefined){
      weather = <>
        <WeatherInfo weather={this.state.weather} />
        <div className='columns'>
          {this.state.weather.forecast.map((f,i) => <WeatherCard key={i} weather={f}/>)}
        </div>
      </>
    }else{
      weather = <Error />
    }

    return (
      <div className='container app'>
        <form className='is-centered' onSubmit={this.handleSubmit}>
          <input className='input' type='text' value={this.state.value} onChange={this.handleChange} placeholder='Which city forecast do you want to see today?'/>
        </form>
        <div id='quick-look' className='is-centered'>
          <p>Most searched</p>
          <div  className='cards'>
            {
              helpers.getQuickLookCities.map((f,i) => <QuickCard key={i} city={f} changeCity={this.changeCity}/>)
            }
          </div>
        </div>
        {weather}
      </div>
    );  
  }
}

export default App;
