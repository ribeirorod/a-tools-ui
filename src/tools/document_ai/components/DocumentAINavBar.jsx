import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSideBarVisibility, toggleSideBar } from '../slices/applicationSlice';
import NavBar from '../../../common/components/navbar/navbar';
import DefaultButton from '../../../common/components/buttons/default-button';
import BaseComponent from '../../../common/components/base-component';
import styles from './NavBar.module.css';

const DocumentAINavBar = () => {
  const dispatch = useDispatch();
  const openSideBar = useSelector((state) => state.displaySideBar.isVisible);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    dispatch(toggleSideBar());
  };

  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      dispatch(setSideBarVisibility(false));
    }
  };

  useEffect(() => {
    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSideBar]);

  return (
    <NavBar
      title="Invoice Data Extraction"
      onDocsClick={() => console.log("Docs clicked")}
      onFeedbackClick={() => console.log("Feedback clicked")}
      onUserClick={toggleDrawer}
      sx={{
        backgroundColor: "#04979E",
        borderBottom: "1px solid #E0E0E0",
        minHeight: "5rem",
        transition: "height 0.5s, width 0.3s ease-in-out",
      }}
    >
      <BaseComponent
        className={styles.logoContainer}
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "1.5rem",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <img 
          src="/SellerX_Logo_White.svg" 
          alt="SellerX Logo" 
          className={styles.logo}
        />
        <BaseComponent
          sx={{
            border: "2px solid white",
            borderRadius: "15px",
            padding: "0.5rem",
            display: "inline-block",
          }}
        >
          <h2 className={styles.title}>Invoice Data Extraction</h2>
        </BaseComponent>
      </BaseComponent>
      <DefaultButton
        onClick={toggleDrawer}
        sx={{ ml: 2 }}
      >
        hello
        {openSideBar ? "Close" : "Menu"}
      </DefaultButton>
    </NavBar>
  );
};

export default DocumentAINavBar;