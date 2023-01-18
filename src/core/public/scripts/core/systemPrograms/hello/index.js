class System_ShizzaHo_Hello {
  constructor() {
    this.start();
  }

  async start(){
    const init = await this.init();

    if (await init) {
      consoleOutput('ShizzaHo WebOS l Version: 0.0.1 l Author: ShizzaHo');
      consoleOutput('---');
      consoleOutput('This is just a semblance of a real OS, the author is having fun by creating this project');
      consoleOutput('All necessary information is available at the address: https://');
      consoleOutput('---');
      consoleOutput('Enter the "help" command for help');
      runProgram('/core/public/scripts/core/systemPrograms/console/index.js');
    }
  }

  async init(){
    openPath = await getMemoryPath();

    return true;
  }
}

runProgramScript(System_ShizzaHo_Hello);
