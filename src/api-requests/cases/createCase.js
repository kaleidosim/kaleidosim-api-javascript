const { postRequest } = require("../../axios/postRequest");

/**
 *
 * @param {String} projectId
 * @param {Object} data
 */
async function createCase(projectId, data) {
  const caseData = data;
  const response = await postRequest("/cases/create/", projectId, caseData);
  console.log(response.data.message);
  return response.data.data.caseId;
}
module.exports = { createCase };
