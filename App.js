import React from "react";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { ToastContainer } from "react-toastify";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import './App.css'
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <ThemeProvider theme={theme({})}>
        <ToastContainer position="top-center" />
        {routing}
    </ThemeProvider>
  );
};

export default App;
