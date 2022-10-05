const { getRequest } = require("../../axios/getRequest");
const { downloadCaseFile } = require("./getDownloadURL");

/**
 *
 * @param {String} caseId
 */
async function getCaseFilesByCaseId(caseId) {
  const response = await getRequest("/files/", caseId);
  console.log(response)
  console.log(response.data.data.message);
  return response.data.data;
}
module.exports = { getCaseFilesByCaseId };
