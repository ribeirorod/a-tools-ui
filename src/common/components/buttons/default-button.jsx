import PropTypes from "prop-types";
import React, { useState } from "react";
import baseTheme from "../../../styles/base-theme";
import darkTheme from "../../../styles/dark-theme";
import {useTheme} from '../../../context/ThemeContext'
import BaseComponent from "../base-component";

const DefaultButton = ({
  onClick,
  size = "small",
  color = "primary",
  children,
  disabled,
  sx,
  ...props
}) => {
  const { theme } = useTheme();
  const currentTheme = theme === "light" ? baseTheme : darkTheme;
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    ...currentTheme.components.button,
    ...currentTheme.components.button[size],
    ...currentTheme.components.button[color],
    ...(isHovered
      ? {
          backgroundColor:
            currentTheme.components.button[color].hoverBackground,
        }
      : {}),
    ...(disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
    ...sx,
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <BaseComponent
      as="button"
      color={color}
      sx={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </BaseComponent>
  );
};

DefaultButton.propTypes = {
  ...BaseComponent.propTypes,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default DefaultButton;
