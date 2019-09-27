import React from 'react';
import { cityPropTypes } from '../../constants/propTypes';
import { cityDefault } from '../../constants/defaultValues';

function City(props) {
  const { loading, name, lastUpdate } = props;

  return (
    <div>
      <h1>City: {loading ? 'loading...' : name}</h1>
      Last update: {new Date(lastUpdate).toLocaleTimeString()}
    </div>
  );
}

City.propTypes = {
  ...cityPropTypes
};

City.defaultProps = {
  ...cityDefault
};

export default City;
