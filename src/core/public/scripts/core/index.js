/* Global system variables */

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
  return new programObject;
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
