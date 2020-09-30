import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    height: "calc( 100vh - 64px)",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: 64,
    overflow: "auto",
    width: "100%",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Header />
      <Grid className={classes.content}>{props.children}</Grid>
    </Grid>
  );
};

export default Layout;
