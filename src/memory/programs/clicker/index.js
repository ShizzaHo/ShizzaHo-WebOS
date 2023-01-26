new class Application_ShizzaHo_GuiTest {
  gui = getLibrary('shizzaho_gui');

  count = 0;

  constructor() {
    this.gui.start(() => {
      this.start();
    });
  }

  start() {
    this.gui.addBlock('center', 'verticalCenter');
    const text = this.gui.addText(this.count, 'white', 'center');
    this.gui.addBlock('buttonBar', 'horizontalCenter', 'center');
    this.gui.addButton(
      '-1',
      () => {
        this.subtract(text);
      },
      'buttonBar'
    );
    this.gui.addButton(
      '0',
      () => {
        this.clear(text);
      },
      'buttonBar'
    );
    this.gui.addButton(
      '+1',
      () => {
        this.add(text);
      },
      'buttonBar'
    );
    this.gui.addBlock('buttonBar2', 'horizontalCenter', 'center');
    this.gui.addButton(
      'exit',
      () => {
        this.exit();
      },
      'buttonBar2'
    );
  }

  add(text) {
    this.count++;
    text.textContent = this.count;
  }

  subtract(text) {
    this.count--;
    text.textContent = this.count;
  }

  clear(text) {
    this.count = 0;
    text.textContent = this.count;
  }

  exit() {
    this.gui.stop();
    stopProgram();
  }

};
