import { getProphecies, getUserProphecies, writeProphecy } from "../util/prophecy_api_util";

export const RECEIVE_PROPHECIES = "RECEIVE_PROPHECIES";
export const RECEIVE_USER_PROPHECIES = "RECEIVE_USER_PROPHECIES";
export const RECEIVE_NEW_PROPHECY = "RECEIVE_NEW_PROPHECY";

export const receiveProphecies = prophecies => ({
  type: RECEIVE_PROPHECIES,
  prophecies
});

export const receiveUserProphecies = prophecies => ({
  type: RECEIVE_USER_PROPHECIES,
  prophecies
});

export const receiveNewProphecy = prophecy => ({
  type: RECEIVE_NEW_PROPHECY,
  prophecy
});

export const fetchProphecies = () => dispatch =>
  getProphecies()
    .then(prophecies => dispatch(receiveProphecies(prophecies)))
    .catch(err => console.log(err));

export const fetchUserProphecies = id => dispatch =>
  getUserProphecies(id)
    .then(prophecies => dispatch(receiveUserProphecies(prophecies)))
    .catch(err => console.log(err));

export const composeProphecy = data => dispatch =>
  writeProphecy(data)
    .then(prophecy => dispatch(receiveNewProphecy(prophecy)))
    .catch(err => console.log(err));
