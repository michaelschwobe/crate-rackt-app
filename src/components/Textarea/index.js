import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Utils.
import { slugify } from '../../utils';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Textarea = (props) => {
  const {
    className,
    id,
    name,
    rows,
    wide,
    required,
    readOnly,
    disabled,
    ...otherProps
  } = props;

  const classes = classNames(styles.root, {
    [styles.small]: !rows,
    [styles.wide]: wide,
    [styles.required]: required,
    [styles.readonly]: readOnly,
    [styles.disabled]: disabled,
  }, className);

  const nameSlug = slugify(name);
  const idSlug = id ? slugify(id) : nameSlug;

  return (
    <textarea
      className={classes}
      id={idSlug}
      name={nameSlug}
      rows={rows || 1}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      {...otherProps}
    />
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number,
  wide: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  className: null,
  id: null,
  rows: null,
  wide: false,
  required: false,
  readOnly: false,
  disabled: false,
};

export default Textarea;
