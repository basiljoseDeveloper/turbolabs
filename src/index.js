import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieRedux from "./components/store/reducers";
import { BrowserRouter as Router } from "react-router-dom";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  movieRedux,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <MuiThemeProvider theme={Theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
