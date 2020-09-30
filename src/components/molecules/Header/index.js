import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Colors from "../../../constants/colors";

const useStyles = makeStyles(() => ({
  appBar: {
    width: "100vw",
    zIndex: 1000,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "rgb(20, 30, 0)" }} position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h4" style={{ color: Colors.white, cursor: "pointer" }} onClick={() => history.push("/")}>
              Space X
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
