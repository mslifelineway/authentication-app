import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InputElement } from "..";
import { useHistory } from "react-router";
import { registerUser } from "../../services";
import { severities, pagePaths } from "../../utils/constants";
import { newUserSchema } from "../../Validations/UserFormValidation";
import useStyles from "./styles";
import { SnackbarContext } from "../../context/SnackbarContext";

const UserForm = (props) => {
  const { register } = props;
  const classes = useStyles();
  const history = useHistory();
  const { setSnackbarOptions } = useContext(SnackbarContext);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const clearAllErrors = () => {
    const clearedErrObj = Object.keys(errors).map((e) => (errors[e] = ""));
    setErrors(clearedErrObj);
  };

  const handleInputChange = async (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    try {
      await newUserSchema.validateAt(name, { [name]: value });
      clearAllErrors();
    } catch (e) {
      const { errors } = e;
      let newError = {};
      errors &&
        errors.forEach((err) => {
          const key = Object.keys(err);
          newError[key[0]] = err[key[0]];
        });
      setErrors({ ...errors, ...newError });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSnackbarOptions((old) => ({
      ...old,
      message: "Logged In successfully!",
      open: true,
      severity: severities.success,
    }));
    setTimeout(() => {
      history.push(pagePaths.dashboard);
    }, 1000);
    
    try {
      await newUserSchema.validate(formData, {
        abortEarly: false,
      });
      const resp = await registerUser(formData);
      setSnackbarOptions((old) => ({
        ...old,
        message: resp.message,
        open: true,
        severity: severities.success,
      }));
      setTimeout(() => {
        history.push(pagePaths.login);
      }, 1000);
    } catch (e) {
      const { response } = e;
      if (response) {
        const { message } = response.data.error;
        setSnackbarOptions((old) => ({ ...old, message, open: true }));
        return;
      }

      const { errors } = e;
      let newError = {};
      errors &&
        errors.forEach((err) => {
          const key = Object.keys(err);
          newError[key[0]] = err[key[0]];
        });
      setErrors({ ...errors, ...newError });
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      className={classes.root}
    >
      <Grid item lg={5} md={5} sm={8} xs={10}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" align="center">
              {register ? "Register an account!" : "Login"}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              className={classes.formBox}
            >
              {register && (
                <InputElement
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.nameError}
                />
              )}
              <Box height="25px" />
              <InputElement
                name="email"
                placeholder="Enter email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.emailError}
              />
              <Box height="25px" />
              <InputElement
                name="password"
                placeholder="Enter password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.passwordError}
              />
              <Box height="50px" />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {register ? "Register" : "Login"}
              </Button>
            </Box>
            <Link
              className={classes.link}
              to={register ? pagePaths.login : pagePaths.register}
            >
              {register ? "Login" : "Register"}
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default UserForm;
