const { getDownloadURL } = require("./api-requests/caseFiles/getDownloadURL");
const { getCaseFilesByCaseId } = require("./api-requests/caseFiles/getCaseFilesByCaseId");
const { getCaseStatus } = require("./api-requests/caseRun/getCaseStatus");

/**
 * Download all the case files for a given caseId
 * @param {String} caseId
 */
async function downloadCaseFiles(caseId) {
  try {
    const caseFiles = await getCaseFilesByCaseId(caseId);
    console.log(caseFiles)
    let caseFileArrayIDs = [];
    // get download URL
    caseFiles.forEach((caseFile) => {
      caseFileArrayIDs.push(caseFile._id);
    });

    console.log("Total Case Files: ", caseFileArrayIDs.length);
    return await getDownloadURL(caseId, caseFileArrayIDs);
  } catch (e) {
    //console.log(e)
    console.log(e.message);
    console.log("No files were found");
  }
}
module.exports = { downloadCaseFiles };
