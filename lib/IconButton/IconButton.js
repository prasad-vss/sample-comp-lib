import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styles from './IconButton.module.css';

const IconButton = forwardRef(({ className, description, ...props }, ref) => (
  <Button
    ref={ref}
    {...props}
    description={description}
    className={clsx(styles.button, className, description && styles.tooltip)}
  />
));

IconButton.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
};

export default IconButton;
