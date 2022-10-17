/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Button as MuiButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = forwardRef(
  (
    {
      variant,
      children,
      className,
      ignoreExistingClassNames = false,
      ...props
    },
    ref,
  ) => {
    let modifierClassName;
    if (variant === 'primary') modifierClassName = styles.primaryButton;
    else if (variant === 'secondary')
      modifierClassName = styles.secondaryButton;
    else if (variant === 'tertiary') modifierClassName = styles.tertiaryButton;
    else modifierClassName = styles.defaultButton;
    const computedClassName = ignoreExistingClassNames
      ? className
      : clsx(styles.button, modifierClassName, className);
    return (
      <MuiButton
        className={computedClassName}
        classes={{ disabled: styles.disabledButton }}
        ref={ref}
        {...props}
        onClick={(e) => {
          if (e?.detail > 1)
            return;
          return props.onClick();
        }}
      >
        {children}
      </MuiButton>
    );
  },
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  ignoreExistingClassNames: PropTypes.bool,
};

export default Button;
