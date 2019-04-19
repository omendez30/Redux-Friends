import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/protected">Protected Page </Link>
          </div>
          <Route path="/login" component={Login} />
          <PrivateRoute path="protected" />
        </div>
      </Router>
    );
  }
}

export default App;
