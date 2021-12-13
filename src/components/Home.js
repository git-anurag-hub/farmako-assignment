import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";

// Home page component.
// Routed to '/' from the App component.

class Home extends Component {
  // Displays either the login page or the dashboard page depending on whether the user is logged in or not.
  // If the user is logged in, the dashboard page is displayed.
  // If the user is not logged in, the login page is displayed.
  render() {
    return <>{this.props.isLoggedIn ? <Dashboard></Dashboard> : <Login></Login>}</>;
  }
}

// Redux store state to props mapping.
const mapStateToProps = (state) => {
  return {
    // isLoggedIn is the state property that is mapped to the isLoggedIn prop. Defines whether the user is logged in or not.
    isLoggedIn: state.auth.length > 0,
  };
};

export default connect(mapStateToProps)(Home);
