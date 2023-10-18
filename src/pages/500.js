import React from "react";

import { Link } from "react-router-dom";

export default function ServerError() {
  return (
    <section className="h-screen flex flex-col items-center">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/ilustration-404.jpg`}
        alt="Opps we lost you"
      />
      <h1 className="text-xl sm:text-3xl text-gray-900 mt-12">
        Opps! Server error
      </h1>
      <p className="text-sm sm:text-lg text-gray-600 mt-4 w-full lg:w-3/12 xl:w-2/12 mx-auto text-center px-4 sm:px-0">
        Mostly this cause by the server was busy,please try again later.
      </p>
      <Link
        className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4"
        to={"/"}
      >
        Back to Home
      </Link>
    </section>
  );
}
