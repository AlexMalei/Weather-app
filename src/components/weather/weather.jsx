import React from 'react';

import { weatherPropTypes } from '../../constants/propTypes';
import { weatherDefault } from '../../constants/defaultValues';

function Weather(props) {
  const { loading, temperature, lastUpdate } = props;

  return (
    <div>
      <h1>WEATHER: {loading ? 'Loading...' : temperature + '°C'} </h1>
      Last update: {new Date(lastUpdate).toLocaleTimeString()}
    </div>
  );
}

Weather.propTypes = {
  ...weatherPropTypes
};

Weather.defaultProps = {
  ...weatherDefault
};

export default Weather;
