const { postRequest } = require("../../axios/postRequest");
/**
 *
 * @param {Array} cases
 */
async function runMultiCases(cases) {
  const response = await postRequest("/caseRun/runMultiCases", "", cases);
  console.log(response.data.message);
  return response.data.success;
}
module.exports = { runMultiCases };
