import React, { Component } from "react";

// PatientInfo component - displays patient information
// Shown on the dashboard page
export default class PatientInfo extends Component {
  // Fake state of the patient history
  state = {
    timeline: [
      {
        id: 1,
        date: "2020, September",
      },
      {
        id: 2,
        date: "2020, September",
      },
    ],
  };

  // Render patient timeline history
  renderTimeline() {
    return this.state.timeline.map((item) => {
      return (
        <div className="">
          <div className="">{item.date}</div>
          <div class="flex flex-coltext-gray-50 my-5">
            <div class="flex w-full">
              <div class="md:mx-auto relative">
                <div class="h-full w-4 flex items-center justify-center">
                  <div class="h-full w-0.5 bg-timeline-black pointer-events-none"></div>
                </div>
                <div class="w-4 h-4 absolute top-7 -mt-3 rounded-full bg-timeline-black shadow text-center">
                  {/* <span class="material-icons">radio_button_checked</span> */}
                </div>
              </div>
              <div class="p-4 rounded-xl mb-4 ml-3 mr-auto shadow-md w-full border-gray-400 border-2">
                <div className="text-xl font-AvenirBold">Back Pain Record</div>
                <div className="flex text-sm mt-3">
                  <button className="px-3 py-2 bg-purple text-white rounded-md mr-3">
                    Prescription
                  </button>
                  <button className="px-3 py-2 bg-purple text-white rounded-md">Report</button>
                </div>
                <div className="rounded-lg w-full bg-light-purple p-5 my-3 flex">
                  <img src="/report.png" className="w-40 mx-1"></img>
                  <img src="/report.png" className="w-40 mx-1"></img>
                  <img src="/report.png" className="w-40 mx-1"></img>
                </div>
                <div className="text-sm my-3">28th, Sep, 2020</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="font-Avenir">
        <div className="flex w-full shadow-md py-1 justify-around">
          <span className="">Vinay Vishal Hospital</span>
          <span
            className="fixed right-32 cursor-pointer"
            onClick={() => {
              this.props.logoutUser();
            }}
          >
            <span className="flex items-center font-AvenirLight">
              Dr. {this.props.username} <span class="material-icons">arrow_drop_down</span>
            </span>
          </span>
        </div>
        <div className="my-10 mx-10">
          <div className="flex items-center">
            <input
              className="py-2 rounded-2xl bg-light-purple w-48 text-center focus:outline-none tracking-wider text-sm mr-10"
              placeholder="9999999999"
            ></input>
            <input
              className="py-2 rounded-2xl bg-light-purple w-48 text-center focus:outline-none tracking-wider text-sm mr-10"
              placeholder="Patient's Name"
            ></input>
            <button className="bg-dark-purple rounded-md text-white h-8 text-sm px-8">
              Search
            </button>
          </div>

          <div className="w-full mt-10 py-5 px-10 bg-light-purple rounded-xl text-sm">
            <span class="inline-grid grid-cols-2 gap-x-40 gap-y-4">
              <div className="inline-grid grid-cols-2 gap-y-4">
                <span className="font-AvenirLight">Name: </span>
                <span>Aman Bhandula</span>
                <span className="font-AvenirLight">Age: </span>
                <span>22</span>
              </div>
              <div className="inline-grid grid-cols-2 gap-y-4">
                <span className="font-AvenirLight">Patient ID: </span>
                <span>101010</span>
                <span className="font-AvenirLight">Gender: </span>
                <span>Male</span>
              </div>
            </span>
          </div>

          <div>
            <div className="text-2xl mt-10 text-center">Medical History</div>
            <div className="mt-16">{this.renderTimeline()}</div>
          </div>
        </div>
      </div>
    );
  }
}
