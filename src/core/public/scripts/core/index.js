/* Global system variables */

let openPath = undefined;

/* ----------------------- */

/* System important commands */

const connectModule = (path) => {
  const script = document.createElement('script');
  script.src = path;
  document.head.appendChild(script);
};

const runProgram = (path) => {
  const runned = document.getElementById('runnedProgramScript');
  if (runned != null) {
    document.head.removeChild(runned);
  }

  const runnedProgramScript = document.createElement('script');
  runnedProgramScript.src = path;
  runnedProgramScript.id = 'runnedProgramScript';
  document.head.appendChild(runnedProgramScript);
};

const runProgramScript = (programObject) => {
  return new programObject();
};

const getMemoryPath = async (path) => {
  const response = await fetch(`/fileapi/getMemoryPath`);
  return await response.text();
};

const getDir = async (path) => {
  let response = await fetch(`/fileapi/getDir?path=${path}`);
  return await response.json();
};

const getDirExists = async (path) => {
  let response = await fetch(`/fileapi/getDirExists?path=${path}`);
  return await response.text();
};

const getFileExists = async (path) => {
  let response = await fetch(`/fileapi/getFileExists?path=${path}`);
  return await response.text();
};

const readFile = async (path) => {
  let response = await fetch(`/fileapi/readFile?path=${path}`);
  return await response.text();
};

const deleteFile = async (path) => {
  await fetch(`/fileapi/deleteFile?path=${path}`);
  return null;
};

const deleteFolder = async (path) => {
  await fetch(`/fileapi/deleteFolder?path=${path}`);
  return null;
};

const newFile = async (name, text, type, path) => {
  await fetch(`/fileapi/newFile?name=${name}&text=${text}&type=${type}&path=${path}`);
  return null;
};

/* ------------------------- */

/* Modules connected by the system */

connectModule('/core/public/scripts/core/console/index.js');

/* -------------------------------- */

/* Autorun program */

onload = () => {
  runProgram('/core/public/scripts/core/systemPrograms/hello/index.js');
};

/* --------------- */
