new class System_ShizzaHo_Hello {
  constructor() {
    this.start();
  }

  async start(){
    const init = await this.init();

    if (await init) {
      consoleOutput('ShizzaHo WebOS l Version: 0.1.0 l Author: ShizzaHo');
      consoleOutput('---');
      consoleOutput('This is just a semblance of a real OS, the author is having fun by creating this project');
      consoleOutput('All necessary information is available at the address: https://');
      consoleOutput('---');
      consoleOutput('Enter the "help" command for help');
      runProgram(systemPath + '\\systemPrograms\\console');
    }
  }

  async init(){
    openPath = await getMemoryPath();
    systemPath = await openPath + "\\system";

    if (await connectLibraries()) {
      return true;
    } else {
      return false;
    }
  }
}
