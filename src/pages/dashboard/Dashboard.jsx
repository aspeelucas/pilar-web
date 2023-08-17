import React, { useEffect } from "react";
import {  Paper, Box, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 15,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{
          color: "primary.main",
        }}> Dashboard</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 20,
            mt: 20,
          }}
        >
          <CardActionArea>
            <Paper
              onClick={() => navigate("./todo")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 200,
                width: 300,
                gap: 2,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <AutoStoriesIcon
                sx={{
                  fontSize: 50,
                }}
              />
              <Typography variant="h4">Todo</Typography>
            </Paper>
          </CardActionArea>
          <CardActionArea>
            <Paper
              onClick={() => navigate("./fetch-list")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 200,
                gap: 2,
                width: 300,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CloudSyncIcon
                sx={{
                  fontSize: 50,
                }}
              />
              <Typography variant="h4">Fetchlist</Typography>
            </Paper>
          </CardActionArea>
        </Box>
      </Box>
    </Box>

  );
};
export default Dashboard;
