import { spacex } from "../actionTypes";

export const getData = (page) => async (dispatch) => {
  try {
    dispatch({ type: spacex.SET_LOADING, isLoading: true });
    await fetch(`https://api.spacexdata.com/v3/launches?limit=${10}&offset=${10}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch({ type: spacex.SET_DATA, data, page });
        } else dispatch({ type: spacex.SET_DATA, data: [], page: 1 });
        dispatch({ type: spacex.SET_LOADING, isLoading: false });
      });
  } catch (err) {
    dispatch({ type: spacex.SET_LOADING, loading: false });
    return Promise.reject({ error: "true", success: false });
  }
};
