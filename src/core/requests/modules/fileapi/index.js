const path = require('path');
const fs = require('fs');

const clc = require("cli-color");

const load = (app) => {
  
  app.get('/fileapi/getMemoryPath', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("getMemoryPath")} | A request came in`)

    res.status(200).send(path.join(__dirname, '..', '..', '..', '..', 'memory').replaceAll("\\", "/"));
  })

  app.get('/fileapi/getDir', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("getDir")} | A request came in`)

    fs.readdir(req.query.path, (err, files) => {
      res.status(200).send({result: files});
    });
  })

  app.get('/fileapi/getDirExists', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("getDirExists")} | A request came in`)

    if (await fs.existsSync(req.query.path)) {
      const result = fs.statSync(req.query.path).isDirectory();
      res.status(200).send(result);
    } else {
      res.status(200).send("false");
    }
  })
  app.get('/fileapi/getFileExists', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("getFileExists")} | A request came in`)

    if (fs.existsSync(req.query.path)) {
      const result = fs.statSync(req.query.path).isFile();
      res.status(200).send(result);
    } else {
      res.status(200).send("false");
    }
  })

  app.get('/fileapi/readFile', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("readFile")} | A request came in`)

    fs.readFile(req.query.path, {encoding: 'utf-8'}, function(err,data){
      if (!err) {
        res.status(200).send(data);
      } else {
        res.status(400);
      }
    });
  })

  app.get('/fileapi/deleteFile', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("deleteFile")} | A request came in`)

    if (fs.existsSync(req.query.path)) {
      fs.unlinkSync(req.query.path);
      res.status(200);
    } else {
      res.status(400);
    }
  })

  app.get('/fileapi/deleteFolder', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("deleteFolder")} | A request came in`)

    if (fs.existsSync(req.query.path)) {
      fs.rmSync(req.query.path, { recursive: true, force: true });
      res.status(200);
    } else {
      res.status(400);
    }
  })

  app.get('/fileapi/newFile', async (req, res) => {
    console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("newFile")} | A request came in`)

    if (req.query.type == "folder") {
      fs.mkdirSync(req.query.path+"/"+req.query.name);
    } else if (req.query.type == "file") {
      fs.writeFileSync(req.query.path+"/"+req.query.name, req.query.text);
    }
    res.status(200);
  })

  console.log(`${clc.green("REQUESTS")} ${clc.black.bgWhite("FILE API")} | FileApi is loaded!`)

};

module.exports = {
  load: load,
}