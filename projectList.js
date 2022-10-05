const { login } = require("./src/api-requests/auth/login");
const { ping } = require("./src/api-requests/ping");
const { countProjects } = require("./src/api-requests/projects/countProjects");
const { listProjects } = require("./src/api-requests/projects/listProjects");

global.token = "";

async function main() {
  try {
    await ping();
    console.time("login");
    const token = await login();
    console.timeEnd("login");
    global.token = token;

    await countProjects();
    console.time("project/list");
    await listProjects();
    console.timeEnd("project/list");
  } catch (e) {
    console.error("this error:", e.message);
  }
}

(async () => {
  console.log("Init");
  await main();
  console.log("End");
})();
