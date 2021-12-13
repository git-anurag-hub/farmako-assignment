// Stores the user's authentication state & token
export default (state = [], action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT_USER":
      return [];
    default:
      return state;
  }
};
