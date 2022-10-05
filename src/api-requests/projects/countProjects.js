const { getRequest } = require("../../axios/getRequest");

/**
 *
 */
async function countProjects() {
  const response = await getRequest("/projects/count");
  console.log(response.data);
  return response.data;
}

module.exports = { countProjects };
