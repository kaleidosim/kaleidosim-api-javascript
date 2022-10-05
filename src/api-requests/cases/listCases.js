const { getRequest } = require("../../axios/getRequest");

/**
 * List all the cases for a specific project
 * @param {String} projectId
 */
async function listCases(projectId) {
  const response = await getRequest("/cases/list/", projectId);
  console.log(response.data.message);
  return response.data.data;
}
module.exports = { listCases };
