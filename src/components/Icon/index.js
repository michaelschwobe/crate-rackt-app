import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

/* eslint-disable max-len */
/**
 * Single path coordinates for {@link Icon} from {@link http://iconmonstr.com iconmonstr}
 *
 * @type {Object}
 */
export const icons = {
  refresh: 'M20.6 12.3c-0.1 2.1-0.9 4.2-2.5 5.8 -3.3 3.3-8.8 3.3-12.1 0C2.6 14.7 2.6 9.3 6 5.9c3.2-3.2 8.3-3.3 11.7-0.4L15.3 8l8.4 1.2 -1.1-8.5 -2.4 2.4C15.4-1.2 8.1-1 3.5 3.5c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0c2.2-2.2 3.3-4.9 3.5-7.7L20.6 12.3z', // custom.
  arrowUp: 'M3 19 0 15.94 12 4 24 15.94 21 19l-9-9z',
  arrowDown: 'M21 5l3 3.06L12 20 0 8.06 3 5l9 9z',
  arrowLeft: 'M19 21l-3.06 3L4 12 15.94 0 19 3l-9 9z',
  arrowRight: 'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z',
  triangleUp: 'M12 3.5 L21 18.5 L3 18.5z',
  triangleDown: 'M3 5.5 L21 5.5 L12 20.5z',
  triangleLeft: 'M3.5 12 L18.5 3 L18.5 21z',
  triangleRight: 'M5.5 3 L20.5 12 L5.5 21z',
};
/* eslint-enable max-len */

//--------------------------------------------------------------------------------------------------

const Icon = ({ className, type, ...props }) => (
  <svg
    className={classNames(styles.root, className, [styles[type]])}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d={icons[type]} />
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
