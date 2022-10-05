const { postRequest } = require("../../axios/postRequest");
/**
 * 
 * @param {String} caseId 
 */
async function terminateCase(caseId) {
  const response = await postRequest("/caseRun/terminateCase/", caseId, {});
  console.log(response);
}

module.exports = { terminateCase };
