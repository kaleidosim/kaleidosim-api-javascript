const { getRequest } = require("../../axios/getRequest");

/**
 * List all your projects
 */
async function listProjects() {
  const response = await getRequest("/projects/list");
  return response.data;
}

module.exports = { listProjects };
