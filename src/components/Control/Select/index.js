import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Utils.
import { slugify } from '../../../utils';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Select = ({
  className,
  id,
  name,
  placeholder,
  options,
  wide,
  required,
  readOnly,
  disabled,
  ...otherProps
}) => {
  const classes = classNames(
    styles.root,
    {
      [styles.wide]: wide,
      [styles.required]: required,
      [styles.readOnly]: readOnly,
      [styles.disabled]: disabled,
    },
    className,
  );

  const nameSlug = slugify(name);
  const idSlug = id ? slugify(id) : nameSlug;

  return (
    <select
      className={classes}
      id={idSlug}
      name={nameSlug}
      required={required}
      disabled={disabled || readOnly}
      {...otherProps}
    >
      <option value="">{placeholder != null ? placeholder : ' '}</option>
      {options.map(option => {
        if (typeof option === 'object') {
          return <option key={option.id} value={option.id}>{option.text}</option>;
        }
        return <option key={option} value={option}>{option}</option>;
      })}
    </select>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      }),
    ),
  ]).isRequired,
  wide: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  className: null,
  id: null,
  placeholder: null,
  wide: false,
  required: false,
  readOnly: false,
  disabled: false,
};

export default Select;
