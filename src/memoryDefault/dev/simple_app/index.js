new class Application_WebOS_HelloWorld {
  constructor() {
    this.start();
  }

  async start(){
    consoleOutput('Hello World!');
    stopProgram();
  }
}
