import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, CircularProgress } from "@material-ui/core";
import moment from "moment";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 450,
    margin: 20,
  },
  media: {
    height: 200,
  },
});
const MediaCard = ({ spacexList, ...props }) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: 20 }}>
      {props.isLoading ? (
        <CircularProgress disableShrink />
      ) : !props.error ? (
        spacexList &&
        spacexList.length &&
        spacexList.map((item) => {
          return (
            <Card className={classes.root} key={item.flight_number} id={item.flight_number}>
              <CardActionArea>
                <CardMedia className={classes.media} image={item.links.mission_patch_small} title={item.mission_name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.mission_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.details}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {moment(item.launch_date_utc).format("MMMM Do YYYY")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })
      ) : (
        <Typography variant="h3" style={{ color: "#fff" }}>
          Movie Not found
        </Typography>
      )}
    </Grid>
  );
};
export default withRouter(MediaCard);
