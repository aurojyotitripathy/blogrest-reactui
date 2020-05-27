import React, { Component } from "react";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/default/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Signin from "./components/pages/Signin";
import signup from "./components/pages/Signup";
import UserProfiles from "./components/pages/admin/UserProfiles";
import UserProfileNew from "./components/pages/admin/UserProfileNew";
import UserProfileEdit from "./components/pages/admin/UserProfileEdit";
import Counter from "./components/temp/counter";
import counters from "./components/temp/counters";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <main role="main" className="container">
            <Switch>
              <Route exact path="/counter" component={counters} />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/userprofiles" component={UserProfiles} />
              <Route
                exact
                path="/userprofiles/add"
                component={UserProfileNew}
              />
              <Route
                exact
                path="/userprofiles/edit/:userName"
                component={UserProfileEdit}
              />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
