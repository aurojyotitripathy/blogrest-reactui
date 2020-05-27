import React, { Component } from "react";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="not-found">
        <h1 className="display-1">404 Page Not found</h1>
      </div>
    );
  }
}

export default NotFound;
