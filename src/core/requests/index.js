const path = require('path');
const fs = require('fs');
const app = undefined;

const startRequests = async (app) => {
  const routesList = [

    app.get('/fileapi/getMemoryPath', async (req, res) => {
      res.status(200).send(path.join(__dirname, '..', '..', 'memory'));
    }),
    app.get('/fileapi/getDir', async (req, res) => {
      fs.readdir(req.query.path, (err, files) => {
        res.status(200).send({result: files});
      });
    }),
    app.get('/fileapi/getDirExists', async (req, res) => {
      if (await fs.existsSync(req.query.path)) {
        const result = fs.statSync(req.query.path).isDirectory();
        res.status(200).send(result);
      } else {
        res.status(200).send("false");
      }
    }),
    app.get('/fileapi/getFileExists', async (req, res) => {
      if (fs.existsSync(req.query.path)) {
        const result = fs.statSync(req.query.path).isFile();
        res.status(200).send(result);
      } else {
        res.status(200).send("false");
      }
    }),
    app.get('/fileapi/readFile', async (req, res) => {
      fs.readFile(req.query.path, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
          res.status(200).send(data);
        } else {
          res.status(400);
        }
      });
    }),
    app.get('/fileapi/deleteFile', async (req, res) => {
      fs.unlinkSync(req.query.path);
      res.status(200);
    }),
    app.get('/fileapi/deleteFolder', async (req, res) => {
      fs.rmSync(req.query.path, { recursive: true, force: true });
      res.status(200);
    }),
    app.get('/fileapi/newFile', async (req, res) => {
      if (req.query.type == "folder") {
        fs.mkdirSync(req.query.path+"/"+req.query.name, req.query.text);
      } else if (req.query.type == "file") {
        fs.appendFile(req.query.path+"/"+req.query.name, req.query.text);
      }
      res.status(200);
    }),

  ]

  return await routesList;
};

module.exports = {
  startRequests: startRequests,
}

