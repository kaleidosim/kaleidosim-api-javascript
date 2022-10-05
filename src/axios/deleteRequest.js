const axios = require("axios");
const config = require("../config/config.json");

async function deleteRequest(route, params = "") {
  const baseUri = config.apiBaseURL;
  const url = baseUri + route + params;
  return axios.delete(url, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${global.token}`,
    },
  });
}

module.exports = { deleteRequest };
