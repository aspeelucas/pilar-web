import React from "react";
import { Box, Paper, Typography } from "@mui/material";
const FetchList = () => {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
    }}>
      <Paper
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          mt: "100px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2">FETCH</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default FetchList;
