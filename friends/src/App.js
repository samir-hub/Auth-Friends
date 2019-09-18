import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddForm from "./components/AddForm";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          {/* <a>
            <Link to="/login">Login</Link>
          </a>
          <a>
            <Link to="/protected">Protected Page</Link>
          </a> */}
        </nav>
        <h1>FriendsList</h1>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/addfriends" component={AddForm}/>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
