import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./FriendsList.css";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axiosWithAuth()
      .get("/friends")
      .then(response => {
        console.log(response);
        setFriends(response.data);
      });
  }, []);

  return (
    <div className="main-div">
      <a className="button">
        <NavLink to={`/addfriends`}>Add Friends</NavLink>
      </a>

      <div className="names">
        {friends.map(friend => (
          <div className="friend">
            <h1>{friend.name}</h1> <h2>{friend.age}</h2> <h3>{friend.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
