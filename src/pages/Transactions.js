import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "parts/Sidebar";
import ThousandFormat from "helpers/ThousandFormat";
import formatDate from "helpers/formatDate";

import orders from "constans/api/orders";
import Congratulation from "parts/Congratulation";
import EmptyState from "parts/EmptyState";
import Loading from "parts/Loading";
import { messageOrders, fetchOrders, statusOrders } from "store/actions/orders";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Transactions() {
  const dispatch = useDispatch();

  const ORDERS = useSelector((state) => state.orders);

  const location = useLocation();

  const params =
    location?.search.length > 0 &&
    location?.search
      ?.substring(1, location.length)
      ?.split?.("&")
      ?.reduce?.((acc, item) => {
        const [key, value] = item.split("=");
        acc[key] = value;
        return acc;
      }, {});

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(statusOrders("loading"));

    orders
      .all()
      .then((res) => {
        dispatch(fetchOrders(res.data));
      })
      .catch((err) => {
        dispatch(messageOrders(err?.data?.response?.message ?? "error"));
      });
  }, [dispatch]);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="flex-1">
        <div className="px-4 sm:px-16">
          {ORDERS?.status === "loading" && <Loading></Loading>}
          {ORDERS?.status === "error" && ORDERS.message}
          {ORDERS?.status === "ok" &&
            (params.order_id ? (
              <Congratulation data={ORDERS.data[params.order_id]} />
            ) : ORDERS.total > 0 ? (
              <>
                <section className="flex flex-col  mt-8 pl-6 sm:pl-0">
                  <h1 className="text-xl sm:text-4xl text-gray-900 font-medium">
                    Transactions
                  </h1>
                  <p className="text-sm sm:text-lg text-gray-600">
                    Keep on tract what you've invested
                  </p>
                </section>
                <section className="flex flex-wrap flex-col mt-8">
                  {Object.values(ORDERS.data)?.map?.((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className="flex flex-wrap justify-start -mx-4 mt-5 mb-4 sm:mb-6"
                      >
                        <div className="w-full sm:w-2/12">
                          <img
                            src={item?.metadata?.course_thumbnail ?? ""}
                            alt={item?.metadata?.course_name ?? ""}
                          />
                        </div>
                        <div className="w-auto sm:w-3/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            {item?.name ?? ""}
                            <p className="text-gray-600 ">
                              {item?.metadata?.course_level ?? "Level"}
                            </p>
                          </h6>
                        </div>
                        <div className="w-full sm:w-2/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            Rp.{" "}
                            {ThousandFormat(item?.metadata?.course_price ?? 0)}
                          </h6>
                        </div>
                        <div className="w-auto sm:w-2/12 px-4">
                          <h6 className="text-gray-900 text-lg">
                            {item?.created_at
                              ? formatDate(item?.created_at)
                              : "-"}
                          </h6>
                        </div>
                        <div className="w-3/12 px-4 flex justify-center">
                          {item?.status === "pendding" && (
                            <Link
                              className="bg-orange-500 hover:bg-orange-400 text-white transition-all duration-200 focus:outline-none shadow-inner  px-6 py-3 mt-0 sm:mt-4 whitespace-nowrap ml-4 sm:ml-0"
                              to={`/joined/${item.course_id}`}
                            >
                              Lunasi
                            </Link>
                          )}
                          {item?.status === "success" && (
                            <Link
                              to={`/courses/${item.course_id}`}
                              className="bg-gray-300 hover:bg-gray-400 transition-all duration-200 focus:outline-none shadow-inner  px-6 py-3 mt-4"
                            >
                              Lihat Kelas
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </section>
              </>
            ) : (
              <EmptyState />
            ))}
        </div>
      </main>
    </div>
  );
}
