import React, { PropTypes } from 'react';
import { Match, Redirect } from 'react-router';

//--------------------------------------------------------------------------------------------------

const MatchWhenAuthed = ({ component: Component, authed, ...otherProps }) => (
  <Match
    {...otherProps}
    render={props => (
      (authed === true)
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> // eslint-disable-line react/prop-types
    )}
  />
);

MatchWhenAuthed.propTypes = {
  component: PropTypes.func.isRequired,
  authed: PropTypes.bool,
};

MatchWhenAuthed.defaultProps = {
  authed: false,
};

export default MatchWhenAuthed;
