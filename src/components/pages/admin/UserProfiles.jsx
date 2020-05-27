import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UserProfiles extends Component {
  state = {
    users: new Array(),
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile = async () => {
    const users = await axios
      .get("http://localhost:9090/blogapi/api/admin/users", {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
      });
  };
  render() {
    //;
    const { users } = this.state;
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">First Name</th>
              <th scope="col">LastName</th>
              <th scope="col">Email Id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary" to="/userprofiles/add">
                    Add user
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/userprofiles/edit/${user.username}`}
                  >
                    Edit user
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserProfiles;
