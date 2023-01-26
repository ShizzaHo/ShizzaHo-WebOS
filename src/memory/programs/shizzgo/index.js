new class Application_ShizzaHo_ShizzGo {
  gui = getLibrary('shizzaho_gui');
  guiObj = {}
  openFile = undefined;

  cutPath = (path) => {
    const splitPath = openPath.split("\\WebOS\\src\\memory\\");
    if (splitPath[1] == undefined) {
      return "/"
    } else {
      return "/"+splitPath[1];
    }
  }

  back = () => {
    const splitedPath = openPath.split("\\");
    if (splitedPath[splitedPath.length-1] != "memory") {
      splitedPath[splitedPath.length-1] = undefined;
      const newPath = splitedPath.join("\\");
      openPath = newPath.substring(0, newPath.length - 1);
    } else {
      consoleOutput(`You are in the root directory of the file system`);
    }
  }

  callbacks = {
    logoff: () => {
      this.logoff();
    },
    back: () => {
      this.back();

      this.drawDir(openPath);
    },
    open: async (fileName) => {
      const path = openPath + "\\" + fileName;
      console.log(await getFileExists(path));

      if (await getFileExists(path) != "false") {
        this.readFile(fileName, await readFile(path));
      } else {
        openPath = path;
        this.drawDir(openPath);
      }
    },
    newfile: ()=>{
      this.gui.stop();
      consoleInput(`Enter the file name`, (name)=>{
        consoleInput(`Enter the contents of the file (optional)`, (content)=>{
          newFile(name, content, "file", openPath);
          this.gui.start(() => {
            this.start();
          });
        });
      });
    },
    newfolder: ()=>{
      this.gui.stop();
      consoleInput(`Enter the folder name`, (name)=>{
        newFile(name, "", "folder", openPath);
        this.gui.start(() => {
          this.start();
        });
      });
    },
    deletefile: ()=>{
      if (this.openFile != undefined) {
        this.gui.stop();
        consoleInput(`[${this.openFile}] Are you sure you want to delete this file?  (Y/N)`, async (name)=>{
          if (name == "Y" || name == "y") {
            if (await getFileExists(openPath + "\\" + this.openFile) == "true") {
              deleteFile(openPath + "\\" + this.openFile);
              this.back();
              this.gui.start(() => {
                this.start();
              });
            } else {
              this.gui.start(() => {
                this.start();
              });
            }
          } else {
            this.gui.start(() => {
              this.start();
            });
          }
        });
      }
    },
    deletefolder: ()=>{
      if (this.cutPath(openPath) != "/") {
        this.gui.stop();
        consoleInput(`[${this.cutPath(openPath)}] Are you sure you want to delete this directory?  (Y/N)`, async (name)=>{
          if (name == "Y" || name == "y") {
            if (await getDirExists(openPath) == "true") {
              deleteFolder(openPath);
              this.back();
              this.gui.start(() => {
                this.start();
              });
            } else {
              this.gui.start(() => {
                this.start();
              });
            }
          } else {
            this.gui.start(() => {
              this.start();
            });
          }
        });
      }
    },
    runprogram: async ()=>{
      if (await getFileExists(openPath+"\\index.js") == "true") {
        this.gui.stop();
        stopProgram();
        runProgram(openPath);
      }
    }
  }

  constructor() {
    this.gui.start(() => {
      this.start();
    });
  }

  start() {
    this.openFile = undefined;

    this.guiObj.shizzgo = this.gui.addBlock({name: "shizzgo", layoutType: "verticalFull"});
    this.gui.editStyle(this.guiObj.shizzgo, "background", "blue");
    this.gui.addBlock({name: "control-panel", layoutType: "horizontalFull"});

    this.gui.addButton({text: "log off", block: "control-panel", callback: this.callbacks.logoff});
    this.gui.addButton({text: "new file", block: "control-panel", callback: this.callbacks.newfile});
    this.gui.addButton({text: "new folder", block: "control-panel", callback: this.callbacks.newfolder});
    this.gui.addButton({text: "delete file", block: "control-panel", callback: this.callbacks.deletefile});
    this.gui.addButton({text: "delete folder", block: "control-panel", callback: this.callbacks.deletefolder });
    this.gui.addButton({text: "run program", block: "control-panel", callback: this.callbacks.runprogram });

    this.drawDir(openPath);
  }

  logoff() {
    this.gui.stop();
    stopProgram();
  }

  async drawDir(path){
    this.gui.clear({block: this.guiObj.shizzgo});

    const obj = this.gui.addButton({text: `<-- back`, block: "shizzgo", callback: this.callbacks.back});
    this.gui.editStyle(obj, "background", "black");
    this.gui.editStyle(obj, "color", "yellow");
    this.gui.editStyle(obj, "textAlign", "start");
    
    const dir = await getDir(path);
    if(await dir.result != undefined){
      dir.result.map((item, index)=>{
        const obj = this.gui.addButton({text: `${index + 1}. ${item}`, block: "shizzgo", callback: ()=>{this.callbacks.open(item)}});
        this.gui.editStyle(obj, "background", "transparent");
        this.gui.editStyle(obj, "color", "white");
        this.gui.editStyle(obj, "textAlign", "start");
      })
    }
  }

  readFile(fileName, fileContent){
    this.gui.clear({block: this.guiObj.shizzgo});

    const obj = this.gui.addButton({text: `<-- back`, block: "shizzgo", callback: this.callbacks.back});
    this.gui.editStyle(obj, "background", "black");
    this.gui.editStyle(obj, "color", "yellow");
    this.gui.editStyle(obj, "textAlign", "start");
    
    this.gui.addText({text: fileContent, block: "shizzgo", multiline: true});

    this.openFile = fileName;
  }

};
