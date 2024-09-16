import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import baseTheme from "../../styles/base-theme";
import darkTheme from "../../styles/dark-theme";
import BaseComponent from '../base-component';
import styles from './container.module.css';

const Container = ({
  children,
  layout = 'column',
  sx,
  className,
  ...props
}) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? baseTheme : darkTheme;
  const containerStyle = {
    ...currentTheme.components.container,
    ...sx,
  };
  const containerClassName = `${styles.container} ${styles[layout]} ${className || ''}`;

  return (
    <BaseComponent
      {...props}
      className={containerClassName}
      sx={containerStyle}
    >
      {children}
    </BaseComponent>
  );
};

Container.propTypes = {
  ...BaseComponent.propTypes,
  layout: PropTypes.oneOf(['default', 'column', 'row', 'grid']),
};

export default Container;