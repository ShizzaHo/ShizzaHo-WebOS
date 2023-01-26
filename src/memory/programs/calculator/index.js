new class Application_ShizzaHo_Calculator {
  constructor() {
    this.start();
  }

  start(){
    consoleOutput('ShizzaHo WebOS Calculator (v1.0)');
    this.input();
    // stopProgram();
  }

  input(){
    consoleInput("Enter the expression (type \"q\" to exit)", (text)=>{this.calculate(text)});
  }

  calculate(text) {
    if (text == "q") {
      stopProgram();
    } else {
      consoleOutput(eval(text));
      this.input();
    }
  }
}
