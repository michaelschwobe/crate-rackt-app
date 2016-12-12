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
    round,
    wide,
    padding,
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
    [styles.round]: !!round,
    [styles.wide]: !!wide,
    [styles.padding]: !!padding,
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
  type: PropTypes.oneOf(['button', 'reset', 'submit', 'link', 'anchor']).isRequired,
  href: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success', 'info']),
  round: PropTypes.bool,
  wide: PropTypes.bool,
  padding: PropTypes.bool,
  iconBefore: PropTypes.oneOf(Object.keys(icons)),
  iconAfter: PropTypes.oneOf(Object.keys(icons)),
  iconOnly: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
