import { Box, FormHelperText, InputBase } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const InputElement = (props) => {
  const { name, placeholder, type = "text", value, onChange, error } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <InputBase
        className={classes.input}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <FormHelperText>{error}</FormHelperText>
    </Box>
  );
};

export default InputElement;
