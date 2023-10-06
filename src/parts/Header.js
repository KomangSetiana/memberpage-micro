import React from "react";
// import propTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "assets/images/logo.svg";

function Header({ onLight, location }) {
  const LinkColor = onLight ? "text-gray-900" : "text-white";

  const LinkCTA =
    location.pathname.indexOf("/login") > -1 ? `/register` : `/login`;
  const textCTA = location.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";
  return (
    <header className="flex justify-between">
      <div style={{ height: 54 }}>
        <Logo className={onLight ? "on-light" : "on-dark"}></Logo>
      </div>
      <ul className="flex">
        <li>
          <Link
            to={"/"}
            className={[
              LinkColor,
              " hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className={[
              LinkColor,
              " hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className={[
              LinkColor,
              " hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className={[
              LinkColor,
              " hover:text-teal-500 text-lg px-6 py-3 font-medium",
            ].join(" ")}
          >
            Story
          </Link>
        </li>
        <li>
          <Link
            // target="_blank"
            rel="noopener noereferer"
            to={LinkCTA}
            className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200  hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
          >
            {textCTA}
          </Link>
        </li>
      </ul>
    </header>
  );

  // Header.propTypes = {
  //   onLight: propTypes.bool,
  // };
}

export default withRouter(Header);
