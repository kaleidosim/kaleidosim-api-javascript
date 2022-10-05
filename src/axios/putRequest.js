const axios = require("axios");
const config = require("../config/config.json");

async function putRequest(route, params = "", data) {
  const baseUri = config.apiBaseURL;
  const url = baseUri + route + params;
  return axios.put(url, data, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${global.token}`,
    },
  });
}

module.exports = { putRequest };
