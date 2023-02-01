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

/* ------------------------- */

/* Modules connected by the system */

/** Connecting commands **/
connectModule('/core/public/scripts/core/commands/system/index.js');
connectModule('/core/public/scripts/core/commands/files/index.js');
/** =================== **/

connectModule('/core/public/scripts/core/console/index.js');
connectModule('/core/public/scripts/core/hello/index.js');

/* -------------------------------- */
