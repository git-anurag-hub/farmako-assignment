import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import history from "../history";
import Lottie from "react-lottie";
import animationData from "../lotties/loading.json";

// Otp component is a form that takes in a code and triggers a login action.
// Shown when the user is not logged in and is trying to login.
// Routed to '/otp' from App component.

class Otp extends Component {
  state = {
    phone: "",
    otp: "",
    loading: false,
  };

  componentDidMount = () => {
    // If user is logged in, redirect to home page.
    if (this.props.isLoggedIn) {
      history.push("/");
    }
    // Get the phone number from the local storage in case user refreshes the page.
    const phone = localStorage.getItem("phone");
    this.setState({ phone });
  };

  handleOtp = async () => {
    // Loading animation starts when user clicks on login button.
    this.setState({ loading: true });
    // Trigger login action.
    await this.props.loginUser(this.state.otp);
    // Loading animation stops when login action is completed.
    this.setState({ loading: false });
  };

  handleChange = async (e) => {
    // Set max length to 4.
    if (e.target.value.length > 4) {
      return;
    }
    this.setState({ otp: e.target.value });
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
            <div className="text-dark-purple mx-40 text-xs my-3">
              Enter the OTP sent to entered mobile number{" "}
              <span className="text-purple tracking-wider font-AvenirBold">{this.state.phone}</span>
            </div>
            <form className="flex-col flex items-center my-3">
              <input
                className="p-2 rounded-xl bg-light-purple text-center focus:outline-none w-64 tracking-otp font-AvenirBold "
                type="number"
                onChange={(e) => this.handleChange(e)}
                value={this.state.otp}
                minLength="4"
                maxLength="4"
                placeholder="0 0 0 0"
              ></input>
              {/* Set the button to disabled when the state is loading or when invalid otp. */}
              <button
                className={`px-2 py-1 rounded w-64 text-white my-4 ${
                  this.state.otp.length < 4 ? "cursor-not-allowed bg-dark-gray " : "bg-purple"
                } ${this.state.loading ? "cursor-not-allowed bg-purple" : "bg-purple"}`}
                disabled={this.state.loading || this.state.otp.length < 4}
                onClick={() => {
                  this.handleOtp();
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
                  "Login"
                )}
              </button>
            </form>
          </div>
          <div className=" w-screen bottom-0 fixed h-5 bg-gradient-to-r from-purple to-gradient-purple hidden sm:block"></div>
        </div>
      </div>
    );
  }
}

// map redux state to props of component.
const mapStateToProps = (state) => {
  return {
    // isLogggedIn is a boolean that is true if user is logged in.
    isLoggedIn: state.auth.length > 0,
  };
};

// map the action to props of component.
export default connect(mapStateToProps, { loginUser })(Otp);
