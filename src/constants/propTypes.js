import PropTypes from 'prop-types';

export const cityPropTypes = {
  name: PropTypes.string,
  lastUpdate: PropTypes.number,
  loading: PropTypes.bool
};

export const weatherPropTypes = {
  data: PropTypes.object,
  lastUpdate: PropTypes.number,
  loading: PropTypes.bool
};
