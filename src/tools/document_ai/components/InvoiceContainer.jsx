import { Box, CircularProgress } from "@mui/material";
import React from "react";
import DynamicForm from "./DynamicForm";
import InvoiceDisplay from "./InvoiceDisplay";

function InvoiceContainer({ invoice , formIndex }) {
  const data = invoice ? invoice : {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "800px",
        width: "95%",
        overflowY: "auto",
        m: 1,
        p: 2,
        backgroundColor: "#F5F5F5",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          minWidth: { xs: "100vw", md: "46vw" },
        }}
      >
        {invoice && <InvoiceDisplay invoice={data} />}
      </Box>
      <Box
        sx={{
          flex: 1,
          paddingTop: 1,
          overflowY: "auto",
          maxWidth: { xs: "100vw", md: "46vw" },
        }}
      >
        {invoice ? (
          <DynamicForm
            template={data.template}
            data={data}
            formIndex={formIndex}
          />
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Box>
  );
}

export default InvoiceContainer;
