class System_ShizzaHo_Hello {
  constructor() {
    consoleOutput('ShizzaHo WebOS l Version: 0.0.1 l Author: ShizzaHo');
    consoleOutput('---');
    consoleOutput('This is just a semblance of a real OS, the author is having fun by creating this project');
    consoleOutput('All necessary information is available at the address: https://');
    consoleOutput('---');
    consoleOutput('Enter the "help" command for help');
    runProgram('/core/public/scripts/core/systemPrograms/console/index.js');
  }
}

runProgramScript(System_ShizzaHo_Hello);
