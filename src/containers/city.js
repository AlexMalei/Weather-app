import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as CityActions } from '../actions/city';

class City extends Component {
  constructor(props) {
    super(props);

    this.state = { city: 'default' };
  }

  componentDidMount() {
    // make request to city api
    // if there is no data in location
  }

  render() {
    return <h1>City: {this.state.city}</h1>;
  }
}

const mapStateToProps = state => ({
  city: state.city
});

const mapDispatchToProps = dispatch => ({
  onCityChange: city => dispatch(CityActions.selectCity(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
