import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import users from "constans/api/users";

import useForm from "helpers/hooks/useForm";
import fieldErrors from "helpers/hooks/fieldErrors";
import Select from "components/Form/Select";
import Input from "components/Form/Input";

function LoginForm({ history }) {
  const dispatch = useDispatch();

  const [{ name, email, password, profesion, otherProfesion }, setState] =
    useForm({
      name: "",
      email: "",
      password: "",
      profesion: "",
      otherProfesion: "",
    });

  const [errors, setErrors] = useState(null);
  function submit(e) {
    e.preventDefault();

    users
      .register({
        name,
        email,
        password,
        profesion: profesion === "others" ? otherProfesion : profesion,
      })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        setErrors(err?.response?.data?.message);
      });
  }

  const ERROR = fieldErrors(errors);
  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Grow Skills</span> From, <br />
          Anyware <span className="font-bold">Gaols</span>
        </h1>
        <form onSubmit={submit}>
          <Input
            value={name}
            error={ERROR?.name?.message}
            placeholder="Your Name"
            onChange={setState}
            labelName="Full Name"
            name="name"
            type="text"
          />
          <Input
            value={email}
            error={ERROR?.email?.message}
            placeholder="Your Email"
            onChange={setState}
            labelName="Email Address"
            name="email"
            type="email"
          />
          <Input
            value={password}
            error={ERROR?.password?.message}
            placeholder="Your Password"
            onChange={setState}
            labelName="Password"
            name="password"
            type="password"
          />

          <Select
            name="profesion"
            labelName="Occupation"
            value={profesion}
            fallbackText="Select your focus"
            onClick={setState}
          >
            <option value="">Select your focus</option>
            <option value="Web Disigner">Web Disigner</option>
            <option value="Backend Develover">Backend Develover</option>
            <option value="Frontend Develove">Frontend Develover</option>
            <option value="others">Others</option>
          </Select>

          {profesion === "others" && (
            <Input
              value={otherProfesion}
              placeholder="Your Occupation"
              onChange={setState}
              labelName="Other's Occupation"
              name="otherProfesion"
              type="text"
            />
          )}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 w-full mt-4"
          >
            Daftar
          </button>
        </form>
      </div>
      <div className="w-1/12"></div>
      <div className="w-5/12 flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-6 -ml-3">
            <img src="/assets/images/james.jpg" alt="Daftar" />
          </div>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12"
            style={{ width: 290 }}
          >
            <p className="text-gray-700 mb-2">
              Semua materi terstruktrur baik dan mentor yang sangat lihai
            </p>
            <span className="text-gray-400 text-sm">James, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
