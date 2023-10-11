import React, { useState, useRef } from "react";
import { withRouter } from "react-router-dom";

import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "components/Form/Select";
import Input from "components/Form/Input";
import useForm from "helpers/hooks/useForm";
import fieldErrors from "helpers/hooks/fieldErrors";
import users from "constans/api/users";
import media from "constans/api/media";
import { populateProfile } from "store/actions/users";
import images2base64 from "utils/base64";

import { ReactComponent as DefaultUser } from "assets/images/default-avatar.svg";

function SettingForm({ details }) {
  const dispatch = useDispatch();

  const addPicture = useRef(null);

  const [errors, setErrors] = useState(null);

  const [state, setKey, setstate] = useForm({
    name: details?.data?.name ?? "",
    email: details?.data?.email ?? "",
    profession: details?.data?.profession ?? "",
    avatar: details?.data?.avatar ?? "",
    password: details?.data?.password ?? "",
    otherProfesion: details?.data?.otherProfesion ?? "",
  });

  function imagePreview(e) {
    e.persist();
    images2base64(e.target.files[0]).then((image) => {
      setKey({
        target: {
          name: e.target.name,
          value: image,
        },
      });
    });
  }

  async function submit(e) {
    e.preventDefault();
    const payload = {
      name: state.name,
      email: state.email,
      password: state.password,
      profession: state.profession,
    };
    if (payload.profession === "others") {
      payload.profession = state.otherProfesion;
    }
    if (state.avatar.indexOf("base64") > -1) {
      const avatar = await media.upload(state.avatar);
      payload.avatar = avatar.data.image;
    }
    users
      .update(payload)
      .then((res) => {
        toast.success("Profile updated");
        setstate({
          ...state,
          password: "",
        });
        setErrors(null);

        dispatch(
          populateProfile({
            ...details,
            ...res.data,
          })
        );
      })
      .catch((err) => {
        setErrors(err.response.data.message ?? "errors");
      });
  }

  const ERROR = fieldErrors(errors);
  return (
    <>
      <section className="flex flex-col mt-8">
        <div className="flex justify-start items-center -mx-5">
          <div className="w-auto text-center px-5">
            <div className="rounded-full overflow-hidden h-24 w-24">
              {state.avatar ? (
                <img
                  className="object-cover w-full h-full"
                  src={state.avatar}
                  alt="Preview"
                  style={{ width: 90, height: 90 }}
                />
              ) : (
                <DefaultUser
                  className="fill-indigo-500"
                  style={{ width: 90, height: 90 }}
                ></DefaultUser>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col">
            <span className="text-gray-600">Add your picture...</span>
            <div>
              <input
                type="file"
                name="avatar"
                ref={addPicture}
                className="hidden"
                onChange={imagePreview}
              />
              <button
                onClick={() => addPicture.current.click()}
                className="bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-3"
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-8">
        <div className="items-center pb-24 flex">
          <div className="w-4/12">
            <form onSubmit={submit}>
              <Input
                value={state.name}
                error={ERROR?.name?.message}
                placeholder="Your Name"
                onChange={setKey}
                labelName="Full Name"
                name="name"
                type="text"
              />
              <Input
                value={state.email}
                error={ERROR?.email?.message}
                placeholder="Your Email"
                onChange={setKey}
                labelName="Email Address"
                name="email"
                type="email"
              />
              <Input
                value={state.password}
                error={ERROR?.password?.message}
                placeholder="Your Password"
                onChange={setKey}
                labelName="Password"
                name="password"
                type="password"
              />

              <Select
                name="profession"
                labelName="Occupation"
                value={state.profession}
                fallbackText="Select your focus"
                onClick={setKey}
              >
                <option value="">Select your focus</option>
                <option value="Web Disigner">Web Disigner</option>
                <option value="Backend Develover">Backend Develover</option>
                <option value="Frontend Develove">Frontend Develover</option>
                <option value="others">Others</option>
              </Select>

              {state.profession === "others" && (
                <Input
                  value={state.otherProfesion}
                  placeholder="Your Occupation"
                  onChange={setKey}
                  labelName="Other's Occupation"
                  name="otherProfesion"
                  type="text"
                />
              )}
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default withRouter(SettingForm);
