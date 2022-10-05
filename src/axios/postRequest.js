const axios = require("axios");
const config = require("../config/config.json");

async function postRequest(route, params = "", data) {
  const baseUri = config.apiBaseURL;
  const url = baseUri + route + params;
  return axios.post(url, data, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${global.token}`,
      "Origin": "0.0.0.0",
    },
  });
}

module.exports = { postRequest };
