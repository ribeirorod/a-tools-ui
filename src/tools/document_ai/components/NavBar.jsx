// ./components/Navbar.js
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSideBarVisibility, toggleSideBar } from '../slices/applicationSlice'; // Adjust the import path if necessary



const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
    <Box>
      <AppBar
        position="sticky"
        color="default"
        sx={{ 
          backgroundColor: "#04979E",
          borderBottom: "1px solid #E0E0E0", 
          minHeight: "5rem",
          transition: "height 0.5s, width 0.3s ease-in-out",
        }}
      >
        <Toolbar >
          <Box
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
              style={{ marginRight: "1rem", height: "2rem" }}
            />
              <Box
                sx={{
                  border: "2px solid white",
                  borderRadius: "15px",
                  padding: "0.5rem",
                  display: "inline-block",
                }}
              >
                <Typography 
                  variant={isMobile ? "h6" : "h5"}
                  noWrap component="div" 
                  sx={{ color: "white" }}>
                    Invoice Data Extraction
                </Typography>
              </Box>
            </Box>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ ml: 2 }}
              >
                {openSideBar ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

        </Toolbar>
      </AppBar>

    </Box>
  );
};

export default Navbar;
