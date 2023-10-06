import {
  STATUS_COURSES,
  FETCH_COURSES,
  WATCH_COURSE,
  MESSAGE_COURSE,
} from "constans/types/courses";

export const statusCourses = (status) => ({
  type: STATUS_COURSES,
  payload: status,
});

export const fetchCourses = (courses) => ({
  type: FETCH_COURSES,
  payload: courses,
});

export const watchCourses = (course) => ({
  type: WATCH_COURSE,
  payload: course,
});

export const messageCourse = (message) => ({
  type: MESSAGE_COURSE,
  payload: message,
});
