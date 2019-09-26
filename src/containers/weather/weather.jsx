import React, { Component } from 'react';
import { isDataOutdate } from '../../helpers/date';

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateWeather();
  }

  componentDidUpdate() {
    if (isDataOutdate(this.props.lastUpdate)) {
      this.props.updateWeather();
    }
  }

  render() {
    return <h1>WEATHER:{this.props.weather}</h1>;
  }
}

export default Weather;
