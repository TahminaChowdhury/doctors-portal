import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import DashBoard from "./Pages/DashBoard/DashBoard";


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
