// Stores the phone no. from login page
export default (state = "", action) => {
  switch (action.type) {
    case "SEND_OTP":
      return action.payload;
    default:
      return state;
  }
};
