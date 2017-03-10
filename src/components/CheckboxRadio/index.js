import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Utils.
import { slugify } from '../../utils';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

export const types = ['checkbox', 'radio'];

//--------------------------------------------------------------------------------------------------

const CheckboxRadio = (props) => {
  const {
    className,
    classNameControl,
    classNameLabel,
    type,
    id,
    name,
    text,
    reverse,
    wide,
    required,
    readOnly,
    disabled,
    ...otherProps
  } = props;

  const classesRoot = classNames(styles.root, {
    [styles.normal]: !reverse,
    [styles.reverse]: reverse,
    [styles.wide]: wide,
    [styles.required]: required,
    [styles.readOnly]: readOnly,
    [styles.disabled]: disabled,
  }, className);
  const classesInput = styles.input;
  const classesControl = classNames(styles.control, styles[`${type}-control`], classNameControl);
  const classesLabel = classNames(styles.text, classNameLabel);

  const nameSlug = slugify(name);
  const idSlug = id ? slugify(id) : nameSlug;

  return (
    <label className={classesRoot} htmlFor={idSlug}>
      <input
        className={classesInput}
        type={type}
        id={idSlug}
        name={nameSlug}
        required={required}
        disabled={disabled || readOnly}
        {...otherProps}
      />
      {' '}
      <span className={classesControl} />
      {' '}
      <span className={classesLabel}>{text}</span>
    </label>
  );
};

CheckboxRadio.propTypes = {
  className: PropTypes.string,
  classNameControl: PropTypes.string,
  classNameLabel: PropTypes.string,
  type: PropTypes.oneOf(types).isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  wide: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

CheckboxRadio.defaultProps = {
  className: null,
  classNameControl: null,
  classNameLabel: null,
  id: null,
  reverse: false,
  wide: false,
  required: false,
  readOnly: false,
  disabled: false,
};

export default CheckboxRadio;
