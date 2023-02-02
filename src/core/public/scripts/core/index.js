/* Global system variables */

let openPath = undefined;
let systemPath = undefined;
let openProgramPath = undefined;
let libraries = {};

/* ----------------------- */

/* System important commands */

const cutPath = (path) => {
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

const getConfig = async () => {
  const openPathLocal = await getMemoryPath();

  return JSON.parse(await readFile(await openPathLocal + "/system/config.json"));
};

const setConfig = async (newParams) => {
  const openPathLocal = await getMemoryPath();
  const config = await getConfig();
  newFile("/system/config.json", JSON.stringify({...config, ...newParams}), "file", await openPathLocal);
};

/* ------------------------- */

/* Modules connected by the system */

/** Connecting commands **/
connectModule('/core/public/scripts/core/commands/system/index.js');
connectModule('/core/public/scripts/core/commands/files/index.js');
/** =================== **/

connectModule('/core/public/scripts/core/console/index.js');
connectModule('/core/public/scripts/core/hello/index.js');

/* -------------------------------- */