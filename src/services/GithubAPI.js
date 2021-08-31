import axios from "axios";

function getAll(username) {
  return axios.get(`https://api.github.com/users/${username}/repos?sort=created&direction=desc`);
}

export default {
  getAll,
};
