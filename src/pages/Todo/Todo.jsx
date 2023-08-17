import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const Todo = () => {
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
              <Typography variant="h2">Todo</Typography>
            </Box>
          </Paper>
        </Box>
    );
}

export default Todo;
