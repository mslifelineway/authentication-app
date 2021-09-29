import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useStyles from "../styles/register.styles";
import cookies from "react-cookie";
import { pagePaths } from "../utils/constants";
import { UserForm } from "../components";

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    const { token } = (cookies && cookies[0]) || "";
    if (token) {
      return history.push(pagePaths.login);
    }
  }, []);

  return (
    <Box className={classes.root}>
      <UserForm register />
    </Box>
  );
};
export default Register;
