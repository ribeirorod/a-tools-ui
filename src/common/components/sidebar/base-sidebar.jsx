import PropTypes from "prop-types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import baseTheme from "../../../styles/base-theme";
import darkTheme from "../../../styles/dark-theme";
import BaseComponent from "../base-component";
import styles from "./sidebar.module.css";

const BaseSidebar = ({
  children,
  isOpen,
  onClose,
  position = "left",
  behavior = "slide",
  size = "md",
  sx,
  className,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme === "light" ? baseTheme : darkTheme;
  const [width, setWidth] = useState("250px");
  const [maxHeight, setMaxHeight] = useState("100%");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let sidebarWidth = "250px";
      let sidebarMaxHeight = "100%";

      if (position === "top" || position === "bottom") {
        sidebarWidth = "auto";
        sidebarMaxHeight = `${viewportHeight * 0.2}px`;
      } else {
        switch (size) {
          case "xs":
            sidebarWidth = `${viewportWidth * 0.15}px`;
            break;
          case "sm":
            sidebarWidth = `${viewportWidth * 0.25}px`;
            break;
          case "md":
            sidebarWidth = `${viewportWidth * 0.35}px`;
            break;
          case "lg":
            sidebarWidth = `${viewportWidth * 0.5}px`;
            break;
          default:
            sidebarWidth = "250px";
        }
      }

      setWidth(sidebarWidth);
      setMaxHeight(sidebarMaxHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, position]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      if (
        (position === "right" && clientX >= innerWidth - 10) ||
        (position === "left" && clientX <= 10) ||
        (position === "bottom" && clientY >= innerHeight - 10)
      ) {
        if (!isOpen) {
          onClose(true);
        }
      }
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, position]);

  return (
    <BaseComponent
    as="aside"
    ref={sidebarRef}
    className={`${styles.sidebar} ${styles[`position-${position}`]} ${
      styles[`behavior-${behavior}`]
    } ${isOpen ? styles.open : ""} ${className}`}
    {...props}
      sx={{
        ...currentTheme.components.sidebar,
        width: width,
        maxHeight: maxHeight,
        margin : currentTheme.spacing(currentTheme.margin['sm']),
        ...sx,
      }}
    >
      <div className={styles.content}>{children}</div>
      <button className={styles.closeButton} onClick={() => onClose(false)}>
        &times;
      </button>
    </BaseComponent>
  );
};

BaseSidebar.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  behavior: PropTypes.oneOf(["slide", "squeeze"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  sx: PropTypes.object,
  className: PropTypes.string,
};

export default BaseSidebar;
