import { connect } from 'react-redux';
import { Actions as WeatherDataActions } from '../../actions/weatherData';
import { Actions as CityActions } from '../../actions/city';
import { Actions as WeatherServiceActions } from '../../actions/weatherService';

import App from './app.jsx';

const mapStateToProps = state => {
  return {
    weather: state.weather,
    city: state.city,
    weatherService: state.weatherService
  };
};

const mapDispatchToProps = dispatch => ({
  updateCity: () => dispatch(CityActions.requestCity()),
  updateWeather: city => dispatch(WeatherDataActions.requestWeatherData(city)),
  updateServiceWeather: service =>
    dispatch(WeatherServiceActions.updateWeatherService(service))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
