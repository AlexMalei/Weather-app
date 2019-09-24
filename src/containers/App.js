import React, { Component } from 'react';

import City from './city/city';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <City />;
  }
}

export default App;
