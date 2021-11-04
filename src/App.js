import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";


function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
