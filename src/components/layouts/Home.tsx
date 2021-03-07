import {
  AppBar,
  Grid,
  IconButton,
  Paper,
  Theme,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { FC } from "react";

import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    width: 300,
    height: 400,
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  grid: {
    flexGrow: 1,
    padding: 16,
    maxWidth: 1080,
  },
}));

const Home: FC = () => {
  const classes = useStyles();

  const items = ["Breakfast", "Lunch", "Dinner"];

  return (
    <>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="h1" className={classes.title}>
            HealthApp
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Grid
          container
          className={classes.grid}
          spacing={2}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Paper elevation={3} className={classes.paper}>
              Total
            </Paper>
          </Grid>
          {items.map((value, index) => (
            <Grid item>
              <Paper key={index} elevation={3} className={classes.paper}>
                {value}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Home;
