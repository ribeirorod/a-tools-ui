import { Box } from "@mui/material";
import React from "react";

function DisplayPlaceHolder({
  title1 = "Invoice Display Placeholder",
  title2 = "Invoice Form Placeholder",
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "15px", // Rounded border radius
        m: 1,
        p: 1,
        minHeight: { xs: '100vw', md: '46vw' },
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          backgroundColor: "#F5F5F5",
          borderRadius: "15px",
          height: "600px",
          alignSelf: "center",
          mr: 1,
          mb: {xs:'1rem', md:0},
          minWidth: { xs: '100vw', md: '46vw' },
        }}
      >
        <h2>{title1}</h2>
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          backgroundColor: "#F5F5F5",
          borderRadius: "15px",
          height: "600px",
          alignSelf: "center",
          ml: {xs:0, md:1},
          minWidth: { xs: '100vw', md: '46vw' },
        }}
      >
        <h2>{title2}</h2>
      </Box>
    </Box>
  );
}

export default DisplayPlaceHolder;
