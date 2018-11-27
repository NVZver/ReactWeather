import React from 'react';
import PropTypes from 'prop-types';

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

    return (
        <div className="weather-card">
            <div className="weather-card__header">
                <div className="wearher-card__weather"> Weather: {JSON.stringify(weather)} </div>
                <div className="wearher-card__weather-main">Main: {JSON.stringify(main)} </div>
                <div className="wearher-card__item">Location: {cityName} {country} </div>
                <div className="wearher-card__item">Time: {dateTime.toString()} </div>
            </div>
            <div className="weather-card__content">
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
