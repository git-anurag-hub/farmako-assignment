import React, { Component } from "react";

// PatientList component - displays a list of patients
// Shown on the dashboard page

export default class PatientList extends Component {
  state = {
    patients: [
      { name: "Aman Bhandula", focus: true },
      { name: "Aman Bhandula", focus: false },
      { name: "Aman Bhandula", focus: false },
      { name: "Aman Bhandula", focus: false },
    ],
  };

  renderPatients() {
    return this.state.patients.map((patient, index) => {
      return (
        <div
          className={`flex items-baseline py-3 pl-10 cursor-pointer ${
            patient.focus ? "bg-dashboard-purple" : ""
          }`}
        >
          <div
            className={`rounded text-xs w-6 h-6 mr-4 tracking-widest text-center pt-1 ${
              patient.focus ? "text-dark-purple bg-white" : "text-white bg-list-purple"
            }`}
          >
            {index + 1}
          </div>
          <div className="text-sm tracking-wider">{patient.name}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="sm:w-72 sm:h-auto h-screen w-screen bg-dark-purple text-white font-Avenir ">
        <div className="sm:text-white text-dark-purple sm:bg-dark-purple bg-white pt-10 px-10">
          <img
            src="/nav.png"
            className="sm:hidden block cursor-pointer"
            onClick={() => this.props.logoutUser()}
          />
          <div className="flex items-center flex-col">
            <div className="flex items-center">
              <img src="./logo-dark.png" className="h-8 mr-2 sm:block hidden"></img>
              <img src="./logo.png" className="h-10 mr-1 sm:hidden block"></img>
              <div className="font-Gilroy font-bold text-2xl">farmako</div>
            </div>
            <hr className="border border-gray-400 w-36 my-4" />
          </div>
        </div>
        <div className="text-xl mt-5 mb-3 tracking-wide text-center font-AvenirBold">
          Today's Patients
        </div>
        {this.renderPatients()}
      </div>
    );
  }
}
