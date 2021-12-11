import React, { Component } from "react";
import { connect } from "react-redux";
import { sendOtp } from "../actions";
import history from "../history";

class Login extends Component {
  state = {
    phoneno: "",
    loading: false,
  };

  handleNext = async () => {
    this.setState({ loading: true });
    await this.props.sendOtp("+91" + this.state.phoneno);
    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="number"
            onChange={(e) => this.setState({ phoneno: e.target.value })}
            value={this.state.phoneno}
            minLength="10"
            maxLength="10"
          ></input>
          <button
            onClick={() => {
              this.handleNext();
            }}
          >
            {this.state.loading ? "Loading..." : "Next"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { sendOtp })(Login);
