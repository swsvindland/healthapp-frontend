import { Apple, Fastfood } from "@material-ui/icons";
import {
  Button,
  IconButton,
  TextField,
  Theme,
  makeStyles,
} from "@material-ui/core";
import React, { FC } from "react";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    "& > *": {
      maxWidth: 600,
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  logo: {
    height: "10rem",
    width: "10rem",
    marginBottom: theme.spacing(10),
  },
  iconButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Login: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = () => {
    history.push("/");
  };

  return (
    <main className={classes.root}>
      <Fastfood className={classes.logo} />
      <TextField id="email" label="Email" variant="outlined" type="email" />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained" color="primary" onClick={handleOnClick}>
        Sign In
      </Button>
      <Button color="secondary" onClick={handleOnClick}>
        Don't have an account? Register
      </Button>
      <div className={classes.iconButtons}>
        <IconButton onClick={handleOnClick}>
          <Apple />
        </IconButton>
        <IconButton onClick={handleOnClick}>
          <Apple />
        </IconButton>
        <IconButton onClick={handleOnClick}>
          <Apple />
        </IconButton>
      </div>
    </main>
  );
};

export default Login;
