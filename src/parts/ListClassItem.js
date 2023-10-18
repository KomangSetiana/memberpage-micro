import React from "react";
import { ReactComponent as IconPlay } from "assets/images/btn_play.svg";
import { Link } from "react-router-dom";

export default function ListClassItem({ data }) {
  return (
    <div className="w-full sm:w-1/4 px-4 mb-4">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay>
          <img
            src={
              data?.thumbnail ??
              `${process.env.REACT_APP_BASE_URL}/assets/images/pic.png`
            }
            alt={data?.name ?? ""}
          />
        </figure>

        <div className="item-meta">
          <h4 className="text-lg text-gray-900">{data?.name ?? "name"}</h4>
          <h5 className="text-sm text-geay-600"> {data?.level ?? "level"}</h5>
        </div>
        <Link to={`/courses/${data.id}`} className="link-wrapped"></Link>
      </div>
    </div>
  );
}
