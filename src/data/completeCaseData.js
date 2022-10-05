/**
 * Data used for creating a complete case
 */

const projectData = { name: "API project", version: "5.x", simulationSoftware: "OpenFoam" };

const caseData = {
  name: "API Case",
  parallel: true,
  runScript:
    './Allrun &>> $ROOT_DIRECTORY/log.txt\n pvpython U_ParaView_LocalFolder_V0.py &>> $ROOT_DIRECTORY/log.txt',
  solverName: "simpleFoam",
  decomposeParDict:
    'echo "\nFoamFile\n        {\n          version 2.0;\n          format ascii;\n          class dictionary;\n          object decomposeParDict;\n        }\n        numberOfSubdomains 1;\n        method scotch;\n" > system/decomposeParDict',
  emailNotification: true,
  machineType: "5d441a30e10af60008ec01f8",
};

const inputFile = {
  fileName: "motorBike.zip",
  sizeInBytes: 702,
};

module.exports = { projectData, caseData, inputFile };
