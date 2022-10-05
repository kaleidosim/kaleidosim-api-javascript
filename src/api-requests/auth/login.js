const axios = require("axios");
const config = require("../../config/config.json");

async function login() {
  const url = config.apiBaseURL + "/auth/login";

  // login data
  const data = { email: config.user.email, password: config.user.password };

  const response = await axios.post(url, data, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log("Login success!🚀");
  console.log("Token generated: ", response.data.token);
  return response.data.token;
}
module.exports = { login };
