import React from 'react';
import PropTypes from 'prop-types';
import './weather-card.scss'

export const WeatherCard = (props) => {

    const data = props.data;
    const weather = props.data.weather[0];
    const main = props.data.main;
    const visibility = props.data.visibility;
    const wind = props.data.wind;
    const clouds = props.data.clouds;
    const cityName = props.data.name;
    const country = props.data.sys.country;
    const dateTime = new Date(props.data.dt);
    const sunrise = new Date(props.data.sys.sunrise);
    const sunset = new Date(props.data.sys.sunset);

    function getSortTemp(temp) {
        return Math.floor(temp);
    }

    function getWeatherIconSrc(iconId) {
        return `http://openweathermap.org/img/w/${iconId}.png`;
    }

    function getDateTime(dateTime) {
        return dateTime.toString();
    }

    return (
        <div className="weather-card shadowed">
            <div className="weather-card__header">
                <div className="weather-card__main">
                    <div className="weather-card__temp-current">
                        <img className="weather-card__icon" src={getWeatherIconSrc(weather.icon)} alt={weather.description} />
                        <span>{getSortTemp(main.temp)} °C</span>
                     </div>
                    
                    <div className="weather-card__description">{weather.description}</div>
                </div>
                <div className="weather-card__location">
                    <div className="weather-card__place">{cityName} {country}</div>
                    <div className="weather-card__datetime">{getDateTime(dateTime)}</div>
                </div>
            </div>
            <div className="weather-card__content">
                <div className="wearher-card__weather-main">Main: {JSON.stringify(main)} </div>
                <div className="wearher-card__item">Vilibility: {JSON.stringify(visibility)} </div>
                <div className="wearher-card__item">Wind: {JSON.stringify(wind)} </div>
                <div className="wearher-card__item">Coulds: {JSON.stringify(clouds)} </div>
                <div className="wearher-card__item">Sunrise: {sunrise.toString()} </div>
                <div className="wearher-card__item">Sunset: {sunset.toString()} </div>
            </div>
        </div>
    );
};

WeatherCard.propTypes = {
    data: PropTypes.object.isRequired
};
