import React from "react";

export default function Centered({ childred }) {
  return (
    <section className="h-screen flex justify-center flex-col items-center">
      <div className="text-lg text-gray-600 mt-4 mb-8 lg:w-8/12 xl:w-6/12 mx-auto text-center">
        {childred}
      </div>
    </section>
  );
}
