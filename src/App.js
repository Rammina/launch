// Package imports
import { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
// Non-package imports
import history from "./browserHistory";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import Flights from "pages/Flights/Flights";
import SearchBar from "components/SearchBar/SearchBar";

const App = () => {
  // render
  return (
    <div>
      <Router history={history}>
        <Switch>
          {/*main routes/pages here*/}
          <Route path={["/", "/flights"]} exact>
            <SearchBar />
            <Flights />
          </Route>

          {/*if it's not any route of the above, show an error 404 page*/}
          <Route>
            <ErrorPage
              errorCode="404"
              errorHeading="Page not found."
              errorText="Sorry, we could not find the page you are looking for."
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
