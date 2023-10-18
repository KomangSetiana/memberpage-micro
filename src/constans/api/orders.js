import axios from "configs/axios";

const all = (options = { params: {} }) => axios.get(`/orders`, options);

const courses = {
  all,
};

export default courses;
