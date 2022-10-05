# KaleidoSim API - NodeJs integration example.

This project was created as example of how it is possible to consume all the functionalities provided by KaleidoSim API.

The main language for this example project is JavaScript with NodeJS.

## Prerequisites

1. Make sure to have nodejs v14 installed on your computer.
2. Make sure to have npm installed.
3. Any code editor (we recommend VSCode).
4. An account in [KaleidoSim](https://app.kaleidosim.com/register).
5. A test or multiple test files.

## Setup

1. Make sure you have an account in [KaleidoSim](https://app.kaleidosim.com/register).
2. Add your credentials in the /src/config/config.json, email and password.

```JSON
"user": {
    "email": "your email here",
    "password": "your password here"
  }
```

3. Open a terminal and run the following command to install all the required dependencies:

```bash
npm install
```

## Project Structure

The project has two main folders: `src`, `outputFiles` and `testFiles`.

The `tesFiles` folder contains the OpenFoam zip cases that will be used for the simulation.

The `src` folder contains all the javascript code created for this example.

Inside the `outputFiles` folder, all the output files generated are downloaded.

### **src folder**

Inside the `src` folder there are 5 main folders.

#### **api_request folder**

Inside the api_request folder there are mutliple folders and each one represent or contain one of the sections presented in the KaleidoSim API Explorer.

**For example:**

The Auth section in the Explorer:
<img src="./img_readme/Auth.png" tag="auth">

Is inside the folder "api_request/auth".

#### **config folder**

The config folder contains only 1 file, this file has three main parameters that must be set up before running any of the examples.

The `config.json` file looks like this:

```JSON
{
  "apiBaseURL": "https://api.kaleidosim.com",
  "user": {
    "email": "",
    "password": ""
  }
}
```

1. The `apiBaseURL` is the KaleidoSim API url, and this application will use that configuration field for every request.
2. User object contains the user credentials.

#### **data folder**

The data folder contains one single file, this file has the configuration required for creating project, cases and uploading files.

For example, the request to create a new project needs the following parameters:

1. the name of the project
2. the version of openfoam
3. the simulation software (OpenFoam)

```javascript
project_data = {
  name: "projectName",
  version: "5.x",
  simulationSoftware: "OpenFoam",
};
```

Every project name has to be unique for an user account, in order to ensure that you can append random generated string to the project name.

Something like this:

```javascript
const uniqueProjectName = `${name}-${nanoid()}`;
const projectId = await createProject(uniqueProjectName, version, simulationSoftware);
```

#### **axios folder**

This folder contains all the different HTTP Request that the application can make to KaleidoSim API.

## Running example case

Open a terminal an execute:

```bash
npm run start
```

This command will run a series of steps to setup your simulation and run it in the cloud.
<img src="./img_readme/Terminal_case_running.png" alt="ks_terminal">

The case created is also visible in the [KaleidoSim Cloud Platform](https://app.kaleidosim.com/)

<img src="./img_readme/KS_case_running.png" alt="ks">

Lets analyse the runCase.js file.

- First it will login the user and save the token

```javascript
const token = await login();
global.token = token;
```

- After that it will create a project, upload input file and a case.

```javascript
const caseId = await createCompleteCase();
```

- Run the case.

```javascript
await runCase(caseId);
```

- Wait until the simulation was completed.

```javascript
while (true) {
  const status = await getCaseStatus(caseId);
  console.log("VM State: ", status.caseStatus);
  if (status.caseStatus === "Completed") {
    // download files when the simulation is completed
    const success = await downloadCaseFiles(caseId);
    if (success) break;
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));
}
```

- Download results.

```javascript
// download files when the simulation is completed
const success = await downloadCaseFiles(caseId);
```

## Important information

- All the files downloaded are visible in the outputFiles folder.
- The token expire after 24 hours.
- The token is being replaced for a new one every time 'npm run start' is executed.
- Make sure you have the inputFile in /testFile/file.zip.
- Make sure the name file is the same as in /src/data/.
- You can only send 10 request per second, otherwise the request will fail due to rate limit in KaleidoSim API.
