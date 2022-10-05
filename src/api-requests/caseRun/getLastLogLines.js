const { getRequest } = require("../../axios/getRequest");
/**
 *
 * @param {String} caseId
 */
async function getLastLogLines(caseId) {
  const response = await getRequest("/caseRun/getLastLogLines/", caseId);
  console.log(response);
}

module.exports = { getLastLogLines };
