import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "parts/Sidebar";

import courses from "constans/api/courses";

import ListClassItem from "parts/ListClassItem";
import Loading from "parts/Loading";

import {
  statusCourses,
  fetchCourses,
  messageCourse,
} from "store/actions/courses";

function EmptyState() {
  return (
    <section className="h-screen flex items-center">
      <div className="w-5/12 text-center py-12 mx-auto">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ilustration-myclass-empty.jpg`}
          alt=""
        />
        <h1 className="text-3xl text-gray-900 mt-12"> Time to Invest</h1>
        <p className="text-lg text-gray-600 mt-4 mb-4 mx-auto text-center">
          It seems you don’t have any class yet so let’s get them and grow your
          skills
        </p>
        <a
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4"
          href={`${process.env.REACT_APP_FRONTPAGE_URL}/library`}
        >
          Cari kelas
        </a>
      </div>
    </section>
  );
}
export default function MyClass() {
  const dispatch = useDispatch();
  const COURSES = useSelector((state) => state.courses);

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusCourses("loading"));
    courses
      .mine()
      .then((res) => {
        dispatch(fetchCourses(res.data));
      })
      .catch((err) => {
        messageCourse(err?.response?.data?.message ?? "error");
      });
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar></Sidebar>

      <main className="flex-1">
        <div className="px-16">
          {COURSES.status === "loading" && <Loading></Loading>}
          {COURSES.status === "error" && COURSES.message}
          {COURSES.status === "ok" &&
            (COURSES.total > 0 ? (
              <>
                <section className="flex flex-col mt-8">
                  <h1 className="text-4xl text-gray-900 font-medium">
                    My Class
                  </h1>
                  <p className="text-lg text-gray-600">
                    Continue learning to your dreams
                  </p>
                </section>
                <section className="flex flex-col mt-8">
                  <div className="justify-start items-center -mx-4">
                    {Object.values(COURSES.data)?.map?.((item, index) => {
                      return (
                        <ListClassItem
                          data={item.course}
                          key={index}
                        ></ListClassItem>
                      );
                    })}
                  </div>
                </section>
              </>
            ) : (
              <EmptyState></EmptyState>
            ))}
        </div>
      </main>
    </div>
  );
}
