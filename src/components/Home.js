import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Dashboard from "./Dashboard";

class Home extends Component {
  //   state = {
  //     isLoggedIn: false,
  //   };
  //   componentDidMount = () => {
  //     this.setState({ isLoggedIn: true });
  //   };
  render() {
    return <div>{this.props.isLoggedIn ? <Dashboard></Dashboard> : <Login></Login>}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.length > 0,
  };
};

export default connect(mapStateToProps)(Home);
