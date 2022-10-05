const { postRequest } = require("../../axios/postRequest");

/**
 *
 * @param {String} caseId
 */
async function abortCase(caseId) {
  const response = await postRequest("/caseRun/abortCase/", caseId, {});
  console.log(response.data.message);
}
module.exports = { abortCase };
