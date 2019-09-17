import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: ""
//   });

//   const handleChange = e => {
//     setCredentials({
//       credentials: {
//         ...credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   const login = e => {
//     e.preventDefault();
//     // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
//     axiosWithAuth()
//       .post("/login", credentials)
//       .then(res => {
//         localStorage.setItem("token", res.data.payload);
//         // redirect to the apps main page?
//         this.props.history.push("/protected");
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <form onSubmit={login}>
//         <input type="text" name="username" value={credentials.username} onChange={handleChange} />
//         <input type="password" name="password" value={credentials.password} onChange={handleChange} />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
      axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          // redirect to the apps main page?
          this.props.history.push('/protected');
        })
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.login}>
            Username:<br></br>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            Password: <br></br>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;
  