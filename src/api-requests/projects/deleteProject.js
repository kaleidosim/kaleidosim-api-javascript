const { deleteRequest } = require("../../axios/deleteRequest");
/**
 *
 * @param {String} projectId
 */
async function deleteProject(projectId) {
  const response = await deleteRequest("/projects/delete/", projectId);

  return response.data;
}
module.exports = { deleteProject };
