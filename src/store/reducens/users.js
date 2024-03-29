import { POPULATE_PROFILE } from "constans/types/users";

const initialState = null;
export default function users(state = initialState, action) {
  switch (action.type) {
    case POPULATE_PROFILE:
      return action.payload;

    default:
      return state;
  }
}
