const axios = require("axios");
const config = require("../config/config.json");

async function getRequest(route, params = "") {
  const baseUri = config.apiBaseURL;
  const url = baseUri + route + params;
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${global.token}`,
    },
  });
}

module.exports = { getRequest };
