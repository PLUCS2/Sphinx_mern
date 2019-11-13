import { getUser } from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USERS_ERRORS = "RECEIVE_USERS_ERRORS";

export const receiveUsers = users => ({
  type: RECEIVE_USERS, 
  users
});

export const receiveUsersErrors = errors => ({
  type: RECEIVE_USERS_ERRORS,
  errors
});

export const fetchUsers = () => dispatch => {
  getUser()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => console.log(err));
}