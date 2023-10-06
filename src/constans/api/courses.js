import axios from "configs/axios";

export default {
  details: (id) => axios.get(`/courses/${id}`),
  join: (id) => axios.post("my-courses", { course_id: id }),
  mine: () => axios.get("my-courses"),
};
