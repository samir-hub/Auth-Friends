import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddForm extends React.Component {
  state = {
    friends: {
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value
      }
    });
  };

  add = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axiosWithAuth()
      .post("/friends", this.state.friends)
      .then(res => {
        console.log(res);
        //   localStorage.setItem('token', res.data.payload);
        //   // redirect to the apps main page?
        //   this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.friends.name}
            onChange={this.handleChange}
          />
          <input
            name="age"
            placeholder="Age"
            value={this.state.friends.age}
            onChange={this.handleChange}
          />
          <input
            name="email"
            placeholder="E-mail"
            value={this.state.friends.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
          <nav>
            <NavLink to={`/protected`}>See Friends</NavLink>
          </nav>
        </form>
      </div>
    );
  }
}

export default AddForm;
