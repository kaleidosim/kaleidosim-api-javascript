const { getRequest } = require("../../axios/getRequest");
/**
 *
 * @param {String} caseId
 */
async function getCaseStatus(caseId) {
  const response = await getRequest("/caseRun/caseStatus/", caseId);
  return response.data.data;
}
module.exports = { getCaseStatus };
