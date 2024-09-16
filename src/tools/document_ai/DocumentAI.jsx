import React from 'react'; // Added import for React
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  IconButton
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
import InvoiceContainer from "./components/InvoiceContainer";
import DocumentAINavBar from './components/DocumentAINavBar';
import DocumentAISidebar from './components/DocumentAISidebar';
import WelcomePage from "./components/pages/WelcomePage";
import { updateInvoice } from "./slices/invoiceSlice";
import { toggleSideBar } from "./slices/applicationSlice"; // Import the action

function DocumentAI() {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.data);
  const isLoading = useSelector((state) => state.invoices.isLoading);
  const drawerOpen = useSelector((state) => state.displaySideBar.isVisible);
  const sidebarRef = useRef(null);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  useEffect(() => {
    if (sidebarRef.current && drawerOpen) {
      setSidebarWidth(sidebarRef.current.offsetWidth);
    } else {
      setSidebarWidth(0);
    }
  }, [drawerOpen]);

  const handleSubmit = (updatedInvoice, index) => {
    dispatch(updateInvoice({ updatedInvoice, index }));
  };

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <Box display="flex" position="relative">
      <IconButton
        onClick={handleToggleSideBar}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box flex={drawerOpen ? `0 0 calc(100% - ${sidebarWidth}px)` : "0 0 100%"}>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
            }}
          >
            <Card sx={{ minWidth: 275 }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  padding: 2,
                }}
              >
                <Typography variant="h5" component="div">
                  {" "}
                  loading invoices{" "}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {" "}
                  this might take a minute.{" "}
                </Typography>
                <CircularProgress />
              </CardContent>
            </Card>
          </Box>
        ) : invoices && invoices.length > 0 ? (
          invoices.map((invoice, index) => (
            <InvoiceContainer
              key={index}
              invoice={invoice}
              onSubmit={(updatedInvoice) => handleSubmit(updatedInvoice, index)}
              formIndex={index}
            />
          ))
        ) : (
         <WelcomePage />
        )}
      </Box>
      {drawerOpen && (
        <Box ref={sidebarRef}>
        <DocumentAISidebar 
        />
      </Box>
      )}
    </Box>
  );
}

export default DocumentAI;
