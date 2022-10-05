const { postRequest } = require("../../axios/postRequest");
/**
 * Run a single case
 * @param {String} caseId
 */
async function runCase(caseId) {
  const response = await postRequest("/caseRun/runCase/", caseId, {});
  console.log(response.data.message);
  return response.data.success;
}

module.exports = { runCase };
