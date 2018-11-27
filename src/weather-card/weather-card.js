import React from 'react';
import PropTypes from 'prop-types';

export const WeatherCard = (props) => {
    const weather = props.weather;
    return (
        <div className="weather-card">
            <div className="weather-card__main">
                {JSON.stringify(weather)}
            </div>
            <div className="weather-card__forecast"></div>
        </div>
    );
};

WeatherCard.propTypes = {
    weather: PropTypes.object.isRequired
};
