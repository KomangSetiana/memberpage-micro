import {
  STATUS_ORDERS,
  FETCH_ORDERS,
  MESSAGE_ORDER,
} from "constans/types/orders";

export const statusOrders = (status) => ({
  type: STATUS_ORDERS,
  payload: status,
});

export const fetchOrders = (orders) => ({
  type: FETCH_ORDERS,
  payload: orders,
});

export const messageOrders = (message) => ({
  type: MESSAGE_ORDER,
  payload: message,
});
