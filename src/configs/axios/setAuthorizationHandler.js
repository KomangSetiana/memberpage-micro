import axios from "configs/axios";

const setAuthorizationHandler = (token = null) => {
  if (token) axios.defaults.headers.common.authorization = token;
  else delete axios.defaults.headers.common.authorization;
};

export default setAuthorizationHandler;
