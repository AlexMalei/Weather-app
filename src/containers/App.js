import React, { Component } from 'react';

import City from './city/city';
import Weather from './weather/weather';

const App = () => {
  return (
    <React.Fragment>
      <City />
      <Weather />
    </React.Fragment>
  );
};

export default App;
