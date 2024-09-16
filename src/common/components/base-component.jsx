import PropTypes from 'prop-types';
import React from 'react';
import baseTheme from '../../styles/base-theme';
import darkTheme from '../../styles/dark-theme';
import {useTheme} from '../../context/ThemeContext'

const BaseComponent = ({
  as: BaseComponent = 'div',
  children,
  color = 'primary',
  rounding = 'md',
  elevation = 'sm',
  padding = 'md',
  margin = 'none',
  className,
  ...props
}) => {

    const { theme } = useTheme();
    const currentTheme = theme === 'light' ? baseTheme : darkTheme;
    const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);


  const baseStyles = {
    backgroundColor: isHexColor ? color : currentTheme.colors[color],
    borderRadius: currentTheme.borderRadius[rounding],
    boxShadow: currentTheme.shadows[elevation],
    padding: currentTheme.padding[padding],
    margin: currentTheme.spacing(currentTheme.margin[margin]),
    ...props.sx,
  };

  return (
    <BaseComponent
      className={className}
      style={baseStyles}
      {...props}
    >
      {children}
    </BaseComponent>
  );
};

BaseComponent.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  sx: PropTypes.object,
  color: PropTypes.string,
  rounding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  elevation: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  margin: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default BaseComponent;