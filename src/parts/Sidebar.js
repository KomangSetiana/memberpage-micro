import React from "react";

import { ReactComponent as DefaultUser } from "assets/images/default-avatar.svg";
import { Link, withRouter } from "react-router-dom";
import users from "constans/api/users";

import { useSelector } from "react-redux";
function Sidebar({ match, history }) {
  const getNavLinkClass = (path) => {
    return match.path === path
      ? "active text-white bg-indigo-800"
      : "text-indigo-500";
  };

  const USERS = useSelector((state) => state.users);

  function logout() {
    users.logout().then((res) => {
      history.push("/login");
      localStorage.removeItem("BWAMICRO:token");
    });
  }
  return (
    <aside
      className="bg-indigo-900 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="max-h-screen h-screen  fixed bg-indigo-900 flex flex-col content-between"
        style={{ width: 280 }}
      >
        <div className="flex flex-col items-center text center mt-8">
          <div className="border border-indogo-500 mx-auto p-2 inline-flex rounded-full overflow-hidden mb-3">
            {USERS?.data?.avatar ? (
              <img
                className="object-cover h-24 w-24"
                src={USERS?.data?.avatar}
                alt={USERS?.data?.name}
              />
            ) : (
              <DefaultUser
                className="fill-indigo-500"
                style={{ width: 90, height: 90 }}
              />
            )}
          </div>
          <h6 className="text-white text-xl">
            {USERS?.data?.name ?? "Username"}
          </h6>
          <span className="text-indigo-500 text-sm">
            {USERS?.data?.profession ?? "Profesion"}
          </span>
        </div>
        <ul className="main-menu mt-12">
          <li>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/"),
              ].join(" ")}
              to="/"
            >
              My Class
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left text-indigo-500",
              ].join(" ")}
              href={`${process.env.REACT_APP_FRONTPAGE_URL}/library`}
            >
              Library
            </a>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/transactions"),
              ].join(" ")}
              to="/transactions"
            >
              Transactions
            </Link>
            <Link
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left",
                getNavLinkClass("/settings"),
              ].join(" ")}
              to="/settings"
            >
              Settings
            </Link>
          </li>
        </ul>

        <div className="my-auto">
          <ul className="main-menu mt-12">
            <button
              className={[
                "nav-link relative flex items-center py-3 px-5 transition-all duration-200 hover:text-white active:text-white focus:outline-none w-full text-left text-indigo-500",
              ].join(" ")}
              onClick={logout}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default withRouter(Sidebar);
