import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <div>{this.props.user.name}</div>
        <button onClick={this.props.logoutUser}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth[0],
  };
};

export default connect(mapStateToProps, { logoutUser })(Dashboard);
