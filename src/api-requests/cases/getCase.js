const { getRequest } = require("../../axios/getRequest");

async function getCase(caseId) {
  const response = await getRequest("/cases/get/", caseId);
  console.log(response.data.message);
  return response.data.data;
}
module.exports = { getCase };
