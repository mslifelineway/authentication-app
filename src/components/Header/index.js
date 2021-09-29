import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Authentication App
        </Typography>
        <Button color="inherit">Account Info</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
