import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Sidebar from "parts/Sidebar";
import SettingForm from "parts/SettingForm";

export default function Settings() {
  const DETAILS = useSelector((state) => state.users);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1">
        <div className="px-16">
          <section className="flex flex-col mt-8">
            <h1 className="text-4xl text-gray-900 font-medium">Settings</h1>
            <p className="text-lg text-gray-600">
              Secure your data informations
            </p>
          </section>
          <SettingForm details={DETAILS}></SettingForm>
        </div>
      </div>
    </div>
  );
}
