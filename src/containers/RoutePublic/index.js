import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';

//--------------------------------------------------------------------------------------------------

const RoutePublic = ({ component: Component, authed, redirectTo, ...otherProps }) => (
  <Route
    {...otherProps}
    render={props => (
      (authed === false)
        ? <Component {...props} />
        : <Redirect to={redirectTo || '/'} />
    )}
  />
);

RoutePublic.propTypes = {
  component: PropTypes.func.isRequired,
  authed: PropTypes.bool,
  redirectTo: PropTypes.string,
};

RoutePublic.defaultProps = {
  authed: false,
  redirectTo: null,
};

export default RoutePublic;
