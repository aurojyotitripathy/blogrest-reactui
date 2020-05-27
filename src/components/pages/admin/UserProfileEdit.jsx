import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function UserProfileEdit() {
  let history = useHistory();
  //let { pusername } = useParams();
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const { username, firstname, lastname, email } = useParams() | user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddUserProfile = async (e) => {
    e.preventDefault();
    //await axios.post("http://localhost:3003/users", user);
    history.push("/userprofiles");
  };

  const loadUser = async () => {
    const result = await axios
      .get(`http://localhost:9090/blogapi/api/admin/${username}/profile`, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        //this.setState({ users: response.data });
      });
  };

  return (
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Add A User</h2>
      <form onSubmit={(e) => handleAddUserProfile(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your UserName"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button className="btn btn-primary btn-block">Add User</button>
      </form>
    </div>
  );
}
