const { postRequest } = require("../../axios/postRequest");
const { inputFile } = require("../../data/completeCaseData");
/**
 *
 * @param {String} caseId
 */
async function uploadInputFile() {
  const response = await postRequest("/files/getUploadSignedUrl", "", inputFile);
  console.log(response.data.message);
  return { url: response.data.data.resumableUploadUrl, fileId: response.data.data.fileId };
}
module.exports = { uploadInputFile };
