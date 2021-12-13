import React, { Component } from "react";
import { connect } from "react-redux";
import { sendOtp } from "../actions";
import Lottie from "react-lottie";
import animationData from "../lotties/loading.json";

// Login Component for the application.
// This component is responsible for rendering the login form and handling the login process.
// Shown when the user is not logged in.
// Routed to '/' from App component.

class Login extends Component {
  state = {
    phoneno: "",
    loading: false,
  };

  // Handle the submit event of the form.
  handleNext = async () => {
    // Loading state starts.
    this.setState({ loading: true });
    // Trigger the action to send the OTP.
    await this.props.sendOtp("+91" + this.state.phoneno);
    // Loading state ends.
    this.setState({ loading: false });
  };

  // Handles the change in the input field.
  handleChange = async (e) => {
    // Set the max length of the input field to 10.
    if (e.target.value.length > 10) {
      return;
    }
    var phoneno = e.target.value;
    this.setState({ phoneno });
  };

  render() {
    return (
      <div className="flex justify-around pt-32 w-screen h-screen bg-light-purple">
        <div className="flex flex-col items-center">
          <div className="bg-white h-96 w-128 rounded-lg pt-14 text-center font-Avenir ">
            <div className="flex items-center justify-center">
              <img src="./logo.png" className="h-12 mr-1"></img>
              <div className="font-Gilroy font-bold text-dark-purple text-2xl">farmako Docs</div>
            </div>
            <hr className="my-3 mx-32" />
            <div className="text-dark-purple mx-38 text-xs my-3">
              Enter your mobile number registered with farmako to log in
            </div>
            <form className="flex-col flex items-center my-3">
              <div className="rounded-xl w-64 bg-light-purple flex justify-evenly">
                <img src="/india.png" className="h-5 my-2" />
                <input
                  value="+91"
                  disabled
                  className="py-2 rounded-xl bg-light-purple w-10 text-center focus:outline-none tracking-wider text-sm"
                ></input>
                <div className="border my-2 border-gray-400"></div>
                <input
                  className="py-2 rounded-xl bg-light-purple w-36 text-center focus:outline-none tracking-wider"
                  type="number"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.phoneno}
                  minLength="10"
                  maxLength="10"
                  placeholder="9999 999 999"
                ></input>
              </div>
              {/* Set the button to disabled when the state is loading or when invalid phoneno. */}
              <button
                className={`px-2 py-1 rounded w-64 text-white my-4 ${
                  this.state.phoneno.length < 10 ? "cursor-not-allowed bg-dark-gray " : "bg-purple"
                } ${this.state.loading ? "cursor-not-allowed bg-purple" : "bg-purple"}`}
                disabled={this.state.loading || this.state.phoneno.length < 10}
                onClick={() => {
                  this.handleNext();
                }}
              >
                {/* Set the loading animation when the state is loading*/}
                {this.state.loading ? (
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData,
                      style: {
                        backgroundColor: "#607AFF",
                      },
                    }}
                    height={20}
                  />
                ) : (
                  "Next"
                )}
              </button>
            </form>
          </div>
          {/* Footer bar shown only when the sceen size is desktop*/}
          <div className=" w-screen bottom-0 fixed h-5 bg-gradient-to-r from-purple to-gradient-purple hidden sm:block"></div>
        </div>
      </div>
    );
  }
}

// Map the redux actions to the props of the component.
export default connect(null, { sendOtp })(Login);
