import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isDataOutdate } from '../../helpers/date';

class City extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateCity();
  }

  componentDidUpdate() {
    if (isDataOutdate(this.props.lastUpdate)) {
      this.props.updateCity();
    }
  }

  render() {
    return (
      <h1>
        City: {this.props.city.loading ? 'loading...' : this.props.city.name}
      </h1>
    );
  }
}

City.propTypes = {
  city: PropTypes.object,
  updateCity: PropTypes.func
};

City.defaultProps = {
  city: 'Minsk'
};

export default City;
