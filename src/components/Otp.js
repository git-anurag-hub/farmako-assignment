import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";
import history from "../history";

class Otp extends Component {
  state = {
    phone: "",
    otp: "",
    loading: false,
  };

  componentDidMount = () => {
    if (this.props.isLoggedIn) {
      history.push("/");
    }
    const phone = localStorage.getItem("phone");
    this.setState({ phone });
  };

  handleOtp = async () => {
    this.setState({ loading: true });
    await this.props.loginUser(this.state.otp);
    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <div>{this.state.phone}</div>
        <form>
          <input type="number" maxLength="4" minLength="4"></input>
          <button
            onClick={() => {
              this.handleOtp();
            }}
          >
            {this.state.loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.length > 0,
  };
};

export default connect(mapStateToProps, { loginUser })(Otp);
