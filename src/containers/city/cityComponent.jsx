import React, { useEffect } from 'react';
import { isNeededUpdate } from '../../helpers/date';

function City({ city, updateCity }) {
  useEffect(() => {
    if (isNeededUpdate(city.lastUpdate)) {
      updateCity();
    }
  });

  return <h1>City: {city.name}</h1>;
}

export default City;
