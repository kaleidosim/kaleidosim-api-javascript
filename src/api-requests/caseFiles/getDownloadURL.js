const axios = require("axios");
const Fs = require("fs");
const { postRequest } = require("../../axios/postRequest");

/**
 *
 * @param {Array} caseFileId
 */
async function getDownloadURL(caseId, caseFileId) {
  const response = await postRequest("/files/getDownloadSignedUrl/byCaseFilesId/", caseId, caseFileId);

  console.log(response.data.message);
  const caseFiles = response.data.data;

  caseFiles.forEach(async (caseFile) => {
    const fileName = caseFile.fileName;
    console.log("FileName: ", fileName);

    const writer = Fs.createWriteStream(`outputFiles/${fileName}`);
    const url = caseFile.downloadURL;
    
    const requestResponse = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    requestResponse.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  });

  return response.data.success;
}
module.exports = { getDownloadURL };
