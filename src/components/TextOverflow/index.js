import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Siblings.
import styles from './index.css';

//------------------------------------------------------------------------------

const TextOverflow = ({ className, width, style, text }) => (
  <span
    className={classNames(styles.root, className)}
    style={{ width, ...style }}
  >
    {text}
  </span>
);

TextOverflow.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  text: PropTypes.node.isRequired,
};

TextOverflow.defaultProps = {
  className: null,
  width: null,
  style: null,
};

export default TextOverflow;
