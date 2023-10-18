import React from "react";

export default function EmptyState({ data }) {
  return (
    <section className="h-screen flex justify-center flex-col items-center relative z-50 bg-white">
      <div className="w-full sm:w-5/12 text-center py-12 mx-auto">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ilustration-myclass-empty.jpg`}
          alt="Success join premium class"
        />
        <h1 className="text-3xl text-gray-900 mt-12">Time to invest</h1>
        <p className="text-gray-600 mt-4 mb-8 mx-auto text-center">
          It seen you don't have any transaction
        </p>
        <a
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 fucos:outline-none text-white shadow-inner px-6 mt-5"
          href={`${process.env.REACT_APP_FRONTPAGE_URL}/courses`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mulai belajar
        </a>
      </div>
    </section>
  );
}
