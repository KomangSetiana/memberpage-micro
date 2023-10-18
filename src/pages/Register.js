import React, { useEffect } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import RegisterForm from "parts/RegisterForm";

export default function Register({ history }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto pt-10 px-4 guest-page">
        <Header onLight></Header>
      </section>
      <section className="container mx-auto pt-10 px-4">
        <RegisterForm></RegisterForm>
      </section>
      <section className=" mt-24 py-12" style={{ backgroundColor: "#161A4F" }}>
        <Footer></Footer>
      </section>
    </>
  );
}
