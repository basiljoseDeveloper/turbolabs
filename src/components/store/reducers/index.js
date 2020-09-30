import { spacex } from "../../store/actionTypes";

const initialState = {
  spacexList: [],
  page: 1,
  isLoading: false,
  error: false,
};

const movieRedux = (state = initialState, action) => {
  switch (action.type) {
    case spacex.SET_DATA:
      return {
        ...state,
        spacexList: action.data,
        error: action.error,
      };
    case spacex.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      break;
  }
  return state;
};
export default movieRedux;
