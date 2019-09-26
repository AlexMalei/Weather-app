import { connect } from 'react-redux';
import { Actions as WeatherDataActions } from '../../actions/weatherData';

import Weather from './weather.jsx';

const mapStateToProps = state => {
  console.log('IN WEATHER STATE');
  console.log(state);
  return {
    weather: state.weatherData.data,
    lastUpdate: state.weatherData.lastUpdate
  };
};

const mapDispatchToProps = dispatch => ({
  updateWeather: city => dispatch(WeatherDataActions.requestWeatherData(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
