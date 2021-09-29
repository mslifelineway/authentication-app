import { Box } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import { SnackbarContextProvider } from "../../context/SnackbarContext";

const Layout = ({ children }) => {
  return (
    <SnackbarContextProvider>
      <Header />
      <Box height="64px" />
      {children}
    </SnackbarContextProvider>
  );
};

export default Layout;
