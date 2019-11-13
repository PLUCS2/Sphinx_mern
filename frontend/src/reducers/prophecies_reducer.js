import {
  RECEIVE_PROPHECIES,
  RECEIVE_USER_PROPHECIES,
  RECEIVE_NEW_PROPHECY
} from "../actions/prophecy_actions";

const PropheciesReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PROPHECIES:
      newState.all = action.prophecies.data;
      return newState;
    case RECEIVE_USER_PROPHECIES:
      newState.user = action.prophecies.data;
      return newState;
    case RECEIVE_NEW_PROPHECY:
      newState.new = action.prophecy.data;
      return newState;
    default:
      return state;
  }
};

export default PropheciesReducer;
