const { deleteRequest } = require("../../axios/deleteRequest");

/**
 * Delete a case
 * @param {String} caseId
 */
async function deleteCase(caseId) {
  const response = await deleteRequest("/cases/delete/", caseId);
  console.log(response.data.message);
  return response.data.success;
}
module.exports = { deleteCase };
