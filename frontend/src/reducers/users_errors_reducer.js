import {
  RECEIVE_USERS_ERRORS,
  RECEIVE_USERS
} from "../actions/user_actions";

const _nullErrors = [];

const UsersErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS_ERRORS:
      return action.errors;
    case RECEIVE_USERS:
      return _nullErrors;
    default:
      return state;
  }
};

export default UsersErrorsReducer;