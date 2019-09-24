import { connect } from 'react-redux';
import { Actions as CityActions } from '../../actions/city';

import City from './cityComponent';

const mapStateToProps = state => ({
  city: state.city
});

const mapDispatchToProps = dispatch => ({
  updateCity: city => dispatch(CityActions.requestCity(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
