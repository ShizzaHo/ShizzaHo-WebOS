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