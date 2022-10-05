const { postRequest } = require("../../axios/postRequest");
/**
 * Creates a new project
 * @param {String} name
 * @param {String} version
 * @param {String} simulationSoftware
 */
async function createProject(name, version, simulationSoftware) {
  const data = { name, version, simulationSoftware };

  const response = await postRequest("/projects/create", "", data);

  console.log(response.data.message);
  console.log("New project added: ", name);
  return response.data.data.projectId;
}

module.exports = { createProject };
