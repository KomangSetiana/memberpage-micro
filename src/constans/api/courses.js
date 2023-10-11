import axios from "configs/axios";

const details = (id) => axios.get(`/courses/${id}`);
const join = (id) => axios.post("my-courses", { course_id: id });
const mine = () => axios.get("my-courses");

const courses = {
  details,
  join,
  mine,
};

export default courses;
