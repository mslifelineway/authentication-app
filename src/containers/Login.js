import { Box } from "@material-ui/core";
import React from "react";
import { Layout, UserForm } from "../components";
import useStyles from "../styles/login.styles";

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Layout>
        <UserForm />
      </Layout>
    </Box>
  );
};

export default Login;
