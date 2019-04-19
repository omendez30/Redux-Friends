import React, { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/login">Login</Link>
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
