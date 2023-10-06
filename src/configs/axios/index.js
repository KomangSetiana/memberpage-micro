import axios from "axios";

import errorHandler from "./errorHandler";

const intance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}`,
});

intance.interceptors.response.use((response) => response.data, errorHandler);

export { default as setAuthorizationHandler } from "./setAuthorizationHandler";
export default intance;
