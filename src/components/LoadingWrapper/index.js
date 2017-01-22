import React, { Children, PropTypes } from 'react';
import classNames from 'classnames';

// Components.
import LoadingIndicator from '../LoadingIndicator';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const LoadingWrapper = ({ children, className, loading, overlay, block, inverse, size, speed }) => {
  // Is NOT loading, display children.
  if (!loading) {
    return Children.only(children);
  }

  // Is loading, overlay children with loading indicator.
  if (overlay) {
    return (
      <div className={classNames(styles.wrapper, className, { [styles.inverse]: inverse })}>

        {Children.only(children)}

        <div className={styles.overlay}>
          <LoadingIndicator
            block={block}
            inverse={inverse}
            size={size}
            speed={speed}
          />
        </div>

      </div>
    );
  }

  // Is loading, display the loading indicator.
  return (
    <LoadingIndicator
      className={className}
      block={block}
      inverse={inverse}
      size={size}
      speed={speed}
    />
  );
};

LoadingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
  overlay: PropTypes.bool,
  block: PropTypes.bool,
  inverse: PropTypes.bool,
  size: PropTypes.number,
  speed: PropTypes.number,
};

LoadingWrapper.defaultProps = {
  className: null,
  loading: false,
  overlay: false,
  block: true,
  inverse: false,
  size: 2,
  speed: null,
};

export default LoadingWrapper;
