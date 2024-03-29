import React from "react";

import { ReactComponent as ArrowBack } from "assets/images/icon-arrow_back.svg";

import { Link, withRouter } from "react-router-dom";

function SidebarClass({ match, data, defaultUri }) {
  const getNavLinkClass = (path) => {
    return match.url === path || defaultUri === path
      ? "text-teal-500"
      : "text-indigo-500";
  };
  const [ToggleMenu, setToggleMenu] = React.useState(false);

  const list = [];
  data.chapters.forEach((chapter, index) => {
    list.push(
      <li key={`${chapter.id}-${index}`}>
        <span className="nav-header relative block py-3 px-5 bg-indigo-800 text-white text-left">
          {chapter?.name ?? "Chapter Name"}
        </span>
      </li>
    );
    if (chapter?.lessons?.length > 0) {
      chapter.lessons.forEach((lesson, index2) => {
        list.push(
          <li key={`${chapter.course_id}-${lesson.id}-${index2}`}>
            <Link
              className={[
                "relative flex items-center py-3 px-5 transition-all hover:text-white duration-200 w-full text-left truncate ...",
                getNavLinkClass(
                  `/courses/${data.id}/${chapter.id}/${lesson.video}`
                ),
              ].join(" ")}
              to={`/courses/${data.id}/${chapter.id}/${lesson.video}`}
            >
              {lesson?.name ?? "Lesson Name"}
            </Link>
          </li>
        );
      });
    }
  });

  const sideBarStyle = {
    width: 280,
    left: window.innerWidth < 640 && !ToggleMenu ? -280 : 0,
  };

  return (
    <>
      <button
        onClick={() => setToggleMenu((prev) => !prev)}
        className={["toggle z-50", ToggleMenu ? "active" : ""].join(" ")}
      ></button>
      <aside
        className="transition-all duration-300 bg-indigo-900 max-h-screen h-screen overflow-y-auto min-h-full fixed sm:relative z-50"
        style={sideBarStyle}
      >
        {ToggleMenu && (
          <div
            className="overlay"
            onClick={() => setToggleMenu((prev) => !prev)}
          ></div>
        )}
        <div
          className="max-h-screen h-screen  fixed bg-indigo-900 flex flex-col content-between"
          style={{ width: 280 }}
        >
          <ul className="main-menu mt-12 overflow-y-auto">
            <li>
              <Link
                className="relative flex items-center py-3 px-5 w-full text-left text-white mb-12"
                to="/"
              >
                <ArrowBack className="mr-1"></ArrowBack> Back to Home
              </Link>
            </li>
            {list}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default withRouter(SidebarClass);
