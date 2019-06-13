import React, {Component} from 'react';
import Axios from 'axios';
import WeatherInfo from './components/weatherInfo/weatherInfo'
import { Container, Form } from 'react-bulma-components/full';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      city : 'bogota',
      weather: {
        city: '',
        date: '',
        src: '',
        text: '',
        temp_c: '',
        temp_f: '',
        humidity: '',
        feelslike_c: '',
        feelslike_f: ''
      }
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
      weather: await this.getWeatherInfoFromCityName(this.state.city)
    })
  }

  async componentDidMount(){
    this.setState({
      weather: await this.getWeatherInfoFromCityName(this.state.city)
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
      humidity: data.current.humidity,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f
    }
  }

  render(){
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <input class="input" type="text" value={this.state.value} onChange={this.handleChange}/>
          <input class="input" type="submit" value="Buscar"/>
        </form>
        <WeatherInfo weather={this.state.weather} />
      </div>
    );  
  }
}

export default App;
