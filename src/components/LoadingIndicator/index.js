import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const LoadingIndicator = ({ className, block, inverse, size, speed }) => {
  const style = {};

  const classNameRoot = classNames(styles.root, className, {
    [styles.block]: block,
    [styles.inverse]: inverse,
  });

  if (size) {
    style.fontSize = `${size}rem`;
  }

  if (speed) {
    style.animationDuration = `${speed}s`;
  }

  return (
    <span className={classNameRoot} style={style}>

      <span className={styles.text}>Loading&hellip;</span>

    </span>
  );
};

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  block: PropTypes.bool,
  inverse: PropTypes.bool,
  size: PropTypes.number,
  speed: PropTypes.number,
};

LoadingIndicator.defaultProps = {
  className: null,
  block: false,
  inverse: false,
  size: null,
  speed: null,
};

export default LoadingIndicator;
