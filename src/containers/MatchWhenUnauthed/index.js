import React, { PropTypes } from 'react';
import { Match, Redirect } from 'react-router';

//--------------------------------------------------------------------------------------------------

const MatchWhenUnauthed = ({ component: Component, authed, redirectTo, ...otherProps }) => (
  <Match
    {...otherProps}
    render={props => (
      (authed === false)
        ? <Component {...props} />
        : <Redirect to={redirectTo || '/'} />
    )}
  />
);

MatchWhenUnauthed.propTypes = {
  component: PropTypes.func.isRequired,
  authed: PropTypes.bool,
  redirectTo: PropTypes.string,
};

MatchWhenUnauthed.defaultProps = {
  authed: false,
};

export default MatchWhenUnauthed;
