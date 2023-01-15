class System_ShizzaHo_Console {
  constructor() {
    this.main();
  }

  main() {
    consoleInput("Enter the command", (text)=>{this.checkCommand(text)});
  }

  help() {
    consoleOutput('Available commands:');
    consoleOutput('help - shows help, available commands and their descriptions');
    consoleOutput('runProgram - Runs the selected program, you must specify the path to the program');
    this.main();
  }

  commandNotExist() {
    consoleOutput('The command does not exist');
    this.main();
  }

  checkCommand(command) {
    switch (command.toLowerCase()) {
      case "help":
        this.help();
        break;
      default:
        this.commandNotExist();
        break;
    }
  }

  
}

runProgramScript(System_ShizzaHo_Console);