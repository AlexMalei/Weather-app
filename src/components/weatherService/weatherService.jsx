import React from 'react';

import WeatherServiceNames from '../../constants/weatherServices';

function WeatherService(props) {
  const { service, onChange } = props;

  return (
    <div>
      <select value={service} onChange={onChange}>
        <option value={WeatherServiceNames.OPEN_WEATHER_MAP}>
          OpenWeatherMap
        </option>
        <option value={WeatherServiceNames.DARK_SKY}>Dark Sky</option>
      </select>
    </div>
  );
}

export default WeatherService;
