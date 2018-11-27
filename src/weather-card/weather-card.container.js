import React, {Component} from 'react';
import {WeatherCard} from './weather-card'

const WEATHER_SERSVICE = 'https://api.openweathermap.org';
const WEATHER_PATH__CURENT = '/data/2.5/weather';
const WEATHER_PATH__FORECAST = '/data/2.5/forecast';
const API_KEY = 'c7caadcd3ebaab58960c97dfdfdee362';

export class WeatherCardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            weather: {}
        };
        this.setWeather();
    }

    async setWeather(){
        const weather = await this.getWeather({
            city: 'London',
            units: 'imperal',
            forecast: false
        });

        this.setState({weather});
    }

    // opts: { city: string, units: 'metric' | 'imperial', forecast?: boolean }
    async getWeather(opts) {
        const method = 'GET';
        const urlOptions = `?q=${opts.city}&units=${opts.units}&APPID=${API_KEY}`;
        const url = `${WEATHER_SERSVICE}${opts.forecast ? WEATHER_PATH__FORECAST : WEATHER_PATH__CURENT}${urlOptions}`;
        const res = await fetch(url).catch(err => err);
        return await res.json();
    }

    render(){
        return <WeatherCard weather={this.state.weather} />
    }
}