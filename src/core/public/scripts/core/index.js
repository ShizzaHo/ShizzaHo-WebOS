/* Global system variables */

let openPath = undefined;
let systemPath = undefined;
let openProgramPath = undefined;
let libraries = {};

/* ----------------------- */

/* System important commands */

const cutPath = (path) => {
  console.log('====================================');
  console.log(1);
  console.log('====================================');
  const splitPath = path.split("/WebOS/src/memory");
  if (splitPath[1] == "") {
    return "/--"
  } else {
    return splitPath[1];
  }
}

const connectModule = (path) => {
  const script = document.createElement('script');
  script.src = path;
  document.head.appendChild(script);
};

const connectLibraries = async () => {
  const libs = await getDir(systemPath + "/libraries");
  await libs.result.map((item)=>{
    connectLibrary(item, systemPath + "/libraries/" + item + "/index.js");
  })
  return true;
};

const connectLibrary = async (name, path) => {
  libraries[name] = eval('(function() {' + await readFile(path) + '}())');
};

const getLibrary = (name) => {
  return libraries[name];
};

const runProgram = async (path) => {
  openProgramPath = path;
  eval(await readFile(path + "/index.js"));
};

const stopProgram = () => {
  runProgram(systemPath + '/systemPrograms/console');
};


const getMemoryPath = async () => {
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
connectModule('/core/public/scripts/core/hello/index.js');

/* -------------------------------- */
