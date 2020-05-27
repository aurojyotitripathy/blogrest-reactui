import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function UserProfileNew() {
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const { username, firstname, lastname, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddUserProfile = async (e) => {
    e.preventDefault();
    //await axios.post("http://localhost:3003/users", user);
    history.push("/userprofiles");
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
export default UserProfileNew;
// class UserProfileNew extends Component {

//   state = {
//     username: "",
//     firstname: "",
//     lastname: "",
//     email: "",
//   };
//   constructor(props) {
//     super(props);
//   }
//   handleAddUserProfile = (e) => {
//     let history = useHistory();
//     e.preventDefult();
//     console.log("coming ");
//     history.push("/");
//   };
//   render() {
//     const { username, firstname, lastname, email } = this.state;
//     return (
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add A User</h2>
//         <form onSubmit={(e) => this.handleAddUserProfile(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={username}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Username"
//               name="username"
//               value={lastname}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//             />
//           </div>
//           <button className="btn btn-primary btn-block">Add User</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default UserProfileNew;
