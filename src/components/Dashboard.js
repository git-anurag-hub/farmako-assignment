import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import PatientInfo from "./PatientInfo";
import PatientList from "./PatientList";

class Dashboard extends Component {
  render() {
    return (
      <div className="flex h-full">
        <PatientList></PatientList>
        <div className="sm:block hidden w-full h-full">
          <PatientInfo
            logoutUser={this.props.logoutUser}
            username={this.props.user.name}
          ></PatientInfo>
        </div>
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
