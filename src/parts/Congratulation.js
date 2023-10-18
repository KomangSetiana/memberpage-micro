import React from "react";

import { Link } from "react-router-dom";

export default function Congratulation({ data }) {
  return (
    <section className="h-screen flex justify-center flex-col items-center">
      <div className="w-5/12 text-center py-12 mx-auto">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ilustration-myclass-empty.jpg`}
          alt="Success join premium class"
        />
        <h1 className="text-3xl text-gray-900 mt-12">Conglatulations</h1>
        <p className="text-gray-600 mt-4 mb-8 mx-auto text-center">
          You have succesfully joined our{" "}
          <strong>{data?.metadata?.course_name ?? "Class Name"}</strong>
        </p>
        <Link
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 fucos:outline-none text-white shadow-inner px-6 mt-5"
          to={`/courses/${data.course_id}`}
        >
          Mulai belajar
        </Link>
      </div>
    </section>
  );
}
