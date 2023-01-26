new class System_ShizzaHo_Console {
  constructor() {
    this.main();
  }

  main() {
    const cutPath = (path) => {
      const splitPath = openPath.split("\\WebOS\\src\\memory\\");
      if (splitPath[1] == undefined) {
        return "/"
      } else {
        return "/"+splitPath[1];
      }
    }

    consoleInput(`[${cutPath(openPath)}] Enter the command`, (text)=>{this.checkCommand(text)});
  }

  help() {
    consoleOutput('Available commands:');
    consoleOutput('=[ INFORMATION ]=');
    consoleOutput('help - Shows help, available commands and their descriptions');
    consoleOutput('=================');
    consoleOutput('=[ NAVIGATION ]=');
    consoleOutput('go - Opens the entered directory');
    consoleOutput('back - Go back to the directory');
    consoleOutput('================');
    consoleOutput('=[ FILE SYSTEM ]=');
    consoleOutput('dir - Show the contents of the open directory');
    consoleOutput('new - Create a new file/directory');
    consoleOutput('del - Delete the selected file');
    consoleOutput('read - Read the contents of the file');
    consoleOutput('================');
    consoleOutput('=[ APPLICATIONS ]=');
    consoleOutput('run - Runs the selected program, you must specify the path to the program');
    consoleOutput('==================');
    this.main();
  }

  async dir() {
    const files = await getDir(openPath);
    files.result.forEach((element, index) => {
      consoleOutput(`${index + 1}. ${element}`);
    });
    this.main();
  }

  async go(path) {
    const newPath = openPath + "\\" + path;
    if (await getDirExists(newPath) == "true") {
      openPath = newPath;
    } else {
      consoleOutput(`directory ${path} does not exist`);
    }

    this.main();
  }

  async back(path) {
    const splitedPath = openPath.split("\\");
    if (splitedPath[splitedPath.length-1] != "memory") {
      splitedPath[splitedPath.length-1] = undefined;
      const newPath = splitedPath.join("\\");
      openPath = newPath.substring(0, newPath.length - 1);
    } else {
      consoleOutput(`You are in the root directory of the file system`);
    }

    this.main();
  }

  async read(path) {
    const readPath = openPath + "\\" + path;
    if (await getFileExists(readPath) == "true") {
      consoleOutput(await readFile(readPath));
    } else {
      consoleOutput(`file ${path} does not exist`);
    }

    this.main();
  }

  async del(path) {
    const readPath = openPath + "\\" + path;
    if (await getFileExists(readPath) == "true") {
      deleteFile(readPath);
      consoleOutput(`File/directory ${path} deleted`);
    } else {
      if (await getDirExists(readPath) == "true") {
        deleteFolder(readPath);
        consoleOutput(`File/directory ${path} deleted`);
      } else {
        consoleOutput(`File/directory ${path} does not exist`);
      }
    }
    this.main();
  }

  async new(name, text, type) {
    newFile(name, text, type, openPath);
    this.main();
  }

  async run(path) {
    const appPath = openPath + "\\" + path;
    if (await getFileExists(appPath+"\\index.js") == "true") {
      runProgram(appPath);
    } else {
      consoleOutput(`application ${path} does not exist`);
      this.main();
    }
  }

  commandNotExist() {
    consoleOutput('The command does not exist');
    this.main();
  }

  checkCommand(command) {
    const commandSplit = command.split(" ");
    switch (commandSplit[0].toLowerCase()) {
      case "help":
        this.help();
        break;
      case "dir":
        this.dir();
        break;
      case "go":
        this.go(commandSplit[1]);
        break;
      case "back":
        this.back();
        break;
      case "read":
        this.read(commandSplit[1]);
        break;
      case "del":
        this.del(commandSplit[1]);
        break;
      case "new":
        this.new(commandSplit[1], commandSplit[2], commandSplit[3]);
        break;
      case "run":
        this.run(commandSplit[1]);
        break;
      default:
        this.commandNotExist();
        break;
    }
  }

  
}