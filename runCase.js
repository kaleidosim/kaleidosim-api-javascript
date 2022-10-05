const { login } = require("./src/api-requests/auth/login");
const { getCaseStatus } = require("./src/api-requests/caseRun/getCaseStatus");
const { ping } = require("./src/api-requests/ping");
const { countProjects } = require("./src/api-requests/projects/countProjects");
const { createCompleteCase } = require("./src/createCompleteCase");
const { downloadCaseFiles } = require("./src/downloadCaseFiles");

global.token = "";

async function main() {
  try {
    await ping();
    const token = await login();
    global.token = token;

    await countProjects();
    const caseId = await createCompleteCase();

    // wait for casefiles
    while (true) {
      const status = await getCaseStatus(caseId);
      console.log("VM State: ", status.caseStatus);
      if (status.caseStatus === "Completed") {
        const success = await downloadCaseFiles(caseId);
        if (success) break;
      }

      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  } catch (e) {
    console.error("this error:", e.message);
  }
}

(async () => {
  console.log("Init");
  await main();
  console.log("End");
})();
