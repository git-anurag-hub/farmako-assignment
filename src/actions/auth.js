import axios from "axios";
import history from "../history";

// Sends the otp to the mobile number
export const sendOtp = (phone) => async (dispatch) => {
  try {
    const res = await axios.post("https://accounts.dev.farmako.in/api/users/sendOTP", {
      phone: "+918002572171",
      isShort: false,
    });
    console.log(res);
    history.push("/otp");
    dispatch({ type: "SEND_OTP", payload: phone });
  } catch (e) {
    console.log(e);
  }
};

// Verifies the otp
export const loginUser = (otp) => async (dispatch) => {
  try {
    const res = await axios.post("https://accounts.dev.farmako.in/api/users/loginOTP", {
      phone: "+918002572171",
      otp,
    });
    history.push("/");
    dispatch({ type: "LOGIN_USER", payload: res.data.profiles });
  } catch (e) {
    console.log(e);
  }
};

// Logs out the user
export const logoutUser = (otp) => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT_USER" });
  } catch (e) {
    console.log(e);
  }
};
