import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import baseTheme from "../../styles/base-theme";
import darkTheme from "../../styles/dark-theme";
import Container from '../containers/container/container';
import styles from './card.module.css';

const Card = ({
  children,
  margin = 'sm',
  ...props
}) => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? baseTheme : darkTheme;
  const cardStyle = {
    ...currentTheme.components.card,
    margin : currentTheme.spacing(currentTheme.margin[margin]),
    ...props.sx,
  };

  return <Container {...props} 
    sx={cardStyle} 
    className={styles.card} 
    >
    {children}
  </Container>;
};

export default Card;