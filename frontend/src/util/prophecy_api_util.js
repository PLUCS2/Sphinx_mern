import axios from "axios";

export const getProphecies = () => {
  return axios.get("/api/prophecies");
};

export const getUserProphecies = id => {
  return axios.get(`/api/prophecies/user/${id}`);
};

export const writeProphecy = data => {
  return axios.post("/api/prophecies/", data);
};
