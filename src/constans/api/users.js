import axios from "configs/axios";

const login = (credentials) => axios.post("/users/login", credentials);
const register = (payload) => axios.post("/users/register", payload);
const refresh = (credentials) =>
  axios.post("/refresh-tokens", {
    refresh_token: credentials.refresh_token,
    email: credentials.email,
  });

const details = () => axios.get("/users");

const update = (data) => axios.put(`/users/${data.id}`, data);

const logout = () => axios.post("users/logout");
const users = {
  login,
  register,
  refresh,
  details,
  update,
  logout,
};

export default users;
