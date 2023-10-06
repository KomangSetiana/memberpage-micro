import React from "react";

import propTypes from "prop-types";

export default function Input({
  name,
  error,
  onChange,
  placeholder,
  labelName,
  inputClassname,
  value,
  type,
}) {
  return (
    <div className="flex flex-col mb-4">
      {labelName && (
        <label
          htmlFor={name}
          className={[
            "text-lg mb-2",
            error ? "text-red-500" : "text-gray-900",
          ].join(" ")}
        >
          Full Name
        </label>
      )}
      <input
        name={name}
        type={type}
        onChange={onChange}
        className={[
          "bg-white focus:outline-none border px-6 py-3 w-1/2 w-full",
          error
            ? "border-red-500 text-red-500"
            : "focus:border-teal-500 border-gray-600 text-gray-600",
          inputClassname,
        ].join(" ")}
        value={value}
        placeholder={placeholder ?? "Change Your Placeholder"}
      />
      <span className="text-red-500">{error}</span>
    </div>
  );
}

Input.propTypes = {
  // value: propTypes.oneOfType(propTypes.string, propTypes.number).isRequired,
  name: propTypes.string,
  error: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  labelName: propTypes.string,
  inputClassname: propTypes.string,
  // type: propTypes.oneOfType(["text", "email", "password"]),
};
