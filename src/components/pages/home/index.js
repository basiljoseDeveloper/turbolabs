import React from "react";
import { Grid } from "@material-ui/core";

import MediaCard from "./Card";
import { connect } from "react-redux";
import { getData } from "../../store/actions";

const Home = (props) => {
  React.useEffect(() => {
    props.getData();
  }, []);

  return (
    <Grid container>
      <MediaCard spacexList={props.spacexList} isLoading={props.isLoading} error={props.error} />
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    spacexList: state.movieRedux.spacexList,

    isLoading: state.movieRedux.isLoading,
    error: state.movieRedux.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (page) => dispatch(getData(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
