import React, { Component } from 'react';
import {WeatherCardContainer} from './weather-card/weather-card.container';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <WeatherCardContainer />
      </div>
    );
  }
}

export default App;
