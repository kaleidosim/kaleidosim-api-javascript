const FormData = require("form-data");
const fs = require("file-system");
const axios = require("axios");
const { inputFile } = require("../../data/completeCaseData");

/**
 *
 * @param {String} url
 */
async function uploadFile(url) {
  const form_data = new FormData();
  form_data.append("file", fs.createReadStream(`${process.cwd()}/testFiles/${inputFile.fileName}`));

  const request_config = {
    method: "put",
    url: url,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: form_data,
  };
  return axios(request_config);
}

module.exports = { uploadFile };
