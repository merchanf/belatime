import React from 'react';
import TestRenderer from "react-test-renderer";
import WeatherInfo from './weatherInfo';

it('Renders the actual weather', () => {
  
  let weather = {
    city: 'Bogota',
    date: new Date('2019-06-15 15:35'), 
    src: '//cdn.apixu.com/weather/64x64/day/116.png',
    text: 'Partly cloudy',
    temp_c: '20.0',
    cloud: '50',
    humidity: '46',
    feelslike_c: '20',
    wind_kph: '22'
  }

  const testRenderer = TestRenderer.create(<WeatherInfo  weather={weather}/>);
  const testInstance = testRenderer.root;
  expect(testInstance).not.toBeNull;

});