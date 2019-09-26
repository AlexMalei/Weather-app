import { connect } from 'react-redux';
import { Actions as CityActions } from '../../actions/city';

import City from './city.jsx';

const mapStateToProps = state => ({
  city: state.city,
  lastUpdate: state.lastUpdate,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  updateCity: () => dispatch(CityActions.requestCity())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
