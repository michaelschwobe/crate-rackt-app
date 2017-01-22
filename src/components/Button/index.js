import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// Components.
import Icon, { icons } from '../../components/Icon';

// Siblings.
import styles from './index.css';

//--------------------------------------------------------------------------------------------------

const Button = (props) => {
  // Props.
  const {
    className,
    children,
    text,
    type,
    href,
    theme,
    rounded,
    wide,
    padded,
    iconBefore,
    iconAfter,
    iconOnly,
    ...otherProps
  } = props;

  // Throw an error to guarantee we never render an empty button.
  if (!text === !children) {
    throw new Error('Failed prop type: Component must contain either `text` or `children`.');
  }

  // CSS Classes.
  const classes = {
    [styles[theme]]: !!theme,
    [styles.rounded]: !!rounded,
    [styles.wide]: !!wide,
    [styles.padded]: !!padded,
    [styles.iconAndText]: (iconBefore && !iconOnly) || (iconAfter && !iconOnly),
    [styles.iconOnly]: !!iconOnly,
  };
  const classesButton = classNames(styles.root, styles.button, className, classes);
  const classesAnchor = classNames(styles.root, styles.anchor, className, classes);

  // Assign a 'title' attribute if...
  // 1. Its empty.
  // 2. props.text isn't empty.
  // 3. Button displays only the icon(s).
  if (!!text && (!otherProps.title && iconOnly)) {
    otherProps.title = text;
  }

  // Inner template.
  const renderChildren = (
    <span className={styles.wrapper}>
      {!!iconBefore && <Icon className={styles.iconBefore} type={iconBefore} />}
      <span className={styles.content}>{text || children}</span>
      {!!iconAfter && <Icon className={styles.iconAfter} type={iconAfter} />}
    </span>
  );

  if (href) {
    // Render a <Link> component.
    if (type === 'link') {
      return <Link className={classesAnchor} to={href} {...otherProps}>{renderChildren}</Link>;
    }
    // Render a <a> tag.
    return <a className={classesAnchor} href={href} {...otherProps}>{renderChildren}</a>;
  }

  // Render a <button> tag.
  return <button className={classesButton} type={type} {...otherProps}>{renderChildren}</button>;
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit', 'link', 'anchor']),
  href: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'info']),
  rounded: PropTypes.bool,
  wide: PropTypes.bool,
  padded: PropTypes.bool,
  iconBefore: PropTypes.oneOf(Object.keys(icons)),
  iconAfter: PropTypes.oneOf(Object.keys(icons)),
  iconOnly: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  children: null,
  text: null,
  type: 'button',
  href: null,
  theme: null,
  rounded: false,
  wide: false,
  padded: false,
  iconBefore: null,
  iconAfter: null,
  iconOnly: false,
};

export default Button;
