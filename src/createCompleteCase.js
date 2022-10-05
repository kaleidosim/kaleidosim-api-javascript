const { nanoid } = require("nanoid");
const { runCase } = require("./api-requests/caseRun/runCase");
const { createCase } = require("./api-requests/cases/createCase");
const { uploadFile } = require("./api-requests/files/uploadFile");
const { uploadInputFile } = require("./api-requests/files/uploadInputFile");
const { createProject } = require("./api-requests/projects/createProject");
const { getCaseStatus } = require("./api-requests/caseRun/getCaseStatus");

const { projectData, caseData } = require("./data/completeCaseData");

/**
 * it creates:
 * 1. new project
 * 2 new case
 * 3. upload input file
 * 4. run the case
 */
async function createCompleteCase() {
  try {
    const { name, version, simulationSoftware } = projectData;
    // creates a new project
    const uniqueProjectName = `${name}-${nanoid()}`;
    const projectId = await createProject(uniqueProjectName, version, simulationSoftware);

    // Create input file record
    const { url, fileId } = await uploadInputFile();

    // creates a new case
    const newData = { ...caseData, inputFileId: fileId };
    const caseId = await createCase(projectId, newData);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    // upload input file
    console.log("Uploading input file to GCS");
    await uploadFile(url);
    console.log("Upload completed!");

    await new Promise((resolve) => setTimeout(resolve, 5000));
    // run the created case
    await runCase(caseId);
    await getCaseStatus(caseId);
    console.log("CASE ID => ", caseId);
    return caseId;
  } catch (e) {
    console.error(JSON.stringify(e));
  }
}

module.exports = { createCompleteCase };
