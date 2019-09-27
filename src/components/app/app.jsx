import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cityPropTypes, weatherPropTypes } from '../../constants/propTypes';
import { cityDefault, weatherDefault } from '../../constants/defaultValues';

import City from '../city/city.jsx';
import Weather from '../weather/weather.jsx';
import WeatherService from '../weatherService/weatherService';
import WeatherServiceNames from '../../constants/weatherServices';

import { isDataOutdate } from '../../helpers/date';

class App extends Component {
  componentDidMount() {
    this.props.updateCity();
  }

  componentDidUpdate(prevProps) {
    if (this.isNeedUpdateWeather()) {
      this.props.updateWeather(this.props.city.name);
    }
  }

  isNeedUpdateWeather() {
    const {
      city: { name, loading: cityLoading },
      weather: { loading: weatherLoading, lastUpdate }
    } = this.props;

    if (!name || cityLoading || weatherLoading) {
      return false;
    }

    return isDataOutdate(lastUpdate);
  }

  onWeatherServiceChange(event) {
    this.props.updateServiceWeather(event.target.value);
  }

  render() {
    const {
      city: { loading: cityLoading, name, lastUpdate: cityLastUpdate },
      weather: {
        data: { temperature },
        loading: weatherLoading,
        lastUpdate: weatherLastUpdate
      },
      weatherService: { serviceName }
    } = this.props;
    return (
      <React.Fragment>
        <WeatherService
          service={serviceName}
          onChange={event => this.onWeatherServiceChange(event)}
        />
        <City
          loading={cityLoading}
          name={name}
          lastUpdate={cityLastUpdate}
        ></City>
        <Weather
          loading={weatherLoading}
          temperature={temperature}
          lastUpdate={weatherLastUpdate}
        ></Weather>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  city: PropTypes.shape({
    ...cityPropTypes
  }),
  weather: PropTypes.shape({
    ...weatherPropTypes
  })
};

App.defaultProps = {
  city: { ...cityDefault },
  weather: { ...weatherDefault }
};

export default App;
