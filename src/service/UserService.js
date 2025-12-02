// using your base URL from Api.js
import Api from "../API/Api";
const registerUser = (userData) => {
  return Api.post("/createUser", userData);
};

const login = (checkDetails) => {
  return Api.post("/checkuser", checkDetails);
};

const checkEmail = (email) => {
  return Api.get(`/check-email/${email}`);
};

const UserService = {
  registerUser,
  login,
  checkEmail,
};

export default UserService;
