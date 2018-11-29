import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import {WeatherCard} from './weather-card'

const WEATHER_SERSVICE = 'https://api.openweathermap.org';
const WEATHER_PATH__CURENT = '/data/2.5/weather';
const WEATHER_PATH__FORECAST = '/data/2.5/forecast';
const API_KEY = '23c5ab55c54de497b666b4190241983b';

export class WeatherCardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
        this.setWeather();
    }

    async setWeather(){
        const data = await this.getWeather({
            city: 'Amsterdam',
            units: 'metric',
            forecast: false
        });
        console.log('error: ', data);
        this.setState({ data });
    }

    // opts: { city: string, units: 'metric' | 'imperial', forecast?: boolean }
    async getWeather(opts) {
        const method = 'GET';
        const urlOptions = `?q=${opts.city}&units=${opts.units}&APPID=${API_KEY}`;
        const url = `${WEATHER_SERSVICE}${opts.forecast ? WEATHER_PATH__FORECAST : WEATHER_PATH__CURENT}${urlOptions}`;
        const res = await fetch(url);
        return await res.json();
    }

    renderProgress(){
        
    }

    renderHandler(){
        if(this.state.data.coord){
            return <WeatherCard data={this.state.data} />
        }

        return <CircularProgress />;
    }

    render(){
        return (
            <div className="weather-card-container">
                {this.renderHandler()}
            </div>
        );
    }
}