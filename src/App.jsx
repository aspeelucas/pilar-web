import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "./pages/routes";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0b263b",
      dark: "#072329",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f7f7f7",
      paper: "#0b263b",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(255,255,255,0.87)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}
export default App;
