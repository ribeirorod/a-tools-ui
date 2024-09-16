import { Box, Typography } from "@mui/material";
import React from 'react';

const WelcomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
        m: 1,
        p: 1,
        minHeight: '100vh',
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          p: 2,
          mb: 1,
        }}
      >
          <Typography variant="h3" sx={{ my: 2, fontWeight: 'light' }}>Welcome to the SX Invoice Processing Application</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          p: 2,
          mb: 1,
        }}
      >
        <Typography variant="body1" sx={{ my: 2 }}>In this pilot version we'll assist you on systematically process and extract data from your invoices.</Typography>
        <Typography variant="h5" sx={{ my: 2 }}>Instructions:</Typography>
        <ul>
          <li><Typography variant="body1">Open the sidebar, select an application to process invoices for.</Typography></li>
          <li><Typography variant="body1">Select your invoices by clicking the "Upload File(s)" button.</Typography></li>
          <li><Typography variant="body1">The invoices will be processed according to the selected application eg. Accounts Payable etc.</Typography></li>
          <li><Typography variant="body1">The processed invoices will be displayed on the main screen.</Typography></li>
          <li><Typography variant="body1">You can manually review and update the extracted data.</Typography></li>
          <li><Typography variant="body1">Once you're satisfied with the data, click the "Approve" button to save the data.</Typography></li>
          <li><Typography variant="body1">Once all invoices are approved, click the "Export" button to download the data.</Typography></li>
          <li><Typography variant="body1">Refresh the page to start over.</Typography></li>
        </ul>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          p: 2,
          mb: 1,
        }}
      >
        <Typography variant="h5">Good to know:</Typography>
        <ul>
          <li><Typography variant="body1">You can upload multiple invoices at once.</Typography></li>
          <li><Typography variant="body1">The application will process the invoices in the background, it might take a while.</Typography></li>
          <li><Typography variant="body1"><b><i>Accounts Payable</i></b>, <b><i>Entry Summary US</i></b> and <b><i>Entry Summary DE</i></b> are currently the only use cases available.</Typography></li>
          <li><Typography variant="body1">Every processed data requires human approval.</Typography></li>
          <li><Typography variant="body1">The data will be saved automatically to our internal database once approved.</Typography></li>
        </ul>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          p: 2,
        }}
      >
        <Typography variant="body1">Version: 1.0.0</Typography>
        <Typography variant="body1">Last Update: 2024-06-20</Typography>
        <Typography variant="body1">Author: <a href="mailto:rodolfo.ribeiro@sellerx.com">rodolfo.ribeiro@sellerx.com</a></Typography>
      </Box>
    </Box>
  );
};

export default WelcomePage;