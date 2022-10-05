const { getRequest } = require("../../axios/getRequest");

/**
 * gets a specific project
 * @param {String} projectId
 */
async function getProjectById(projectId) {
  const response = await getRequest("/projects/get/", projectId);
  return response;
}

module.exports = { getProjectById };
