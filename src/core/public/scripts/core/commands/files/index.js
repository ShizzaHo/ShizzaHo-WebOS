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

const rename = async (path, newPath) => {
  await fetch(`/fileapi/rename?&path=${path}&newName=${newPath}`);
  return null;
};