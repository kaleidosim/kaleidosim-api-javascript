const axios = require("axios");
const config = require("../config/config.json");

async function ping() {
  const baseUri = config.apiBaseURL;
  const response = await axios.get(`${baseUri}/ping`, {
    headers: {
      accept: "application/json",
    },
  });
  console.log(response.data.message);
}

module.exports = { ping };
