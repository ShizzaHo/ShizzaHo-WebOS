new (class Application_ShizzaHo_GuiTest {
  gui = getLibrary('shizzaho_gui');

  count = 0;

  constructor() {
    this.gui.start(() => {
      this.start();
    });
  }

  start() {
    this.gui.addBlock({ name: 'center', layoutType: 'verticalCenter' });
    const text = this.gui.addText({
      text: this.count,
      block: 'center',
      color: 'white',
    });
    this.gui.addBlock({ name: 'buttonBar', layoutType: 'horizontalConter', block: 'center' });
    this.gui.addButton({
      text: `-1`,
      block: 'buttonBar',
      callback: () => {
        this.subtract(text);
      },
    });
    this.gui.addButton({
      text: `0`,
      block: 'buttonBar',
      callback: () => {
        this.clear(text);
      },
    });
    this.gui.addButton({
      text: `+1`,
      block: 'buttonBar',
      callback: () => {
        this.add(text);
      },
    });
    this.gui.addSeparator({block: "center"});
    this.gui.addBlock({ name: 'buttonBar2', layoutType: 'horizontalConter', block: 'center' });
    this.gui.addButton({
      text: `exit`,
      block: 'buttonBar2',
      callback: () => {
        this.exit();
      },
    });
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
})();
