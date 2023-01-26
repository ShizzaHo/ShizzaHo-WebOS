// ? NAME: ShizzaHo GUI
// ? AUTHOR: ShizzaHo
// ? VERSION: 2.0
// ? URL: -

return {
  start: async (callback) => {
    document.body.innerHTML = "";

    const styles = document.createElement('style');
    styles.textContent = await readFile(systemPath + "/libraries/shizzaho_gui" + "/styles.css");
    document.head.appendChild(styles);

    const guiContainer = document.createElement('div');
    guiContainer.classList.add("ShizzaHo_Gui_Container");
    document.body.appendChild(guiContainer);

    if (await styles.textContent) {
      return callback();
    } else {
      return false;
    }
  },
  stop: () => {
    document.getElementsByClassName("ShizzaHo_Gui_Container")[0].remove();
  },
  addBlock: (settings) => { // name, layoutType, block
    const blockDiv = document.createElement('div');
    blockDiv.classList.add(settings.name);
    switch(settings.layoutType){
      case "horizontalFull":
        blockDiv.classList.add("ShizzaHo_Gui_HorizontalFull");
        break;
      case "verticalFull":
        blockDiv.classList.add("ShizzaHo_Gui_VerticalFull");
        break;
      case "horizontalCenter":
        blockDiv.classList.add("ShizzaHo_Gui_HorizontalCenter");
        break;
      case "verticalCenter":
        blockDiv.classList.add("ShizzaHo_Gui_VerticalCenter");
        break;
      default:
        break;
    }
    document.getElementsByClassName(settings.block || "ShizzaHo_Gui_Container")[0].appendChild(blockDiv);

    return blockDiv;
  },
  addText: (settings) => { // text, color, block, multiline
    const text = document.createElement('span');
    if (settings.multiline === true) {
      text.style.whiteSpace = "pre-wrap";
    }
    text.textContent = settings.text;
    text.style.color = settings.color;
    document.getElementsByClassName(settings.block || "ShizzaHo_Gui_Container")[0].appendChild(text);

    return text;
  },
  addSeparator: (settings) => { // block
    const separator = document.createElement('br');
    document.getElementsByClassName(settings.block || "ShizzaHo_Gui_Container")[0].appendChild(separator);

    return separator;
  },
  addButton: (settings) => { // text, block, callback
    const button = document.createElement('button');
    button.textContent = settings.text;
    button.classList.add("ShizzaHo_Gui_Button");
    button.onclick = ()=>{settings.callback(button)};
    document.getElementsByClassName(settings.block || "ShizzaHo_Gui_Container")[0].appendChild(button);

    return button;
  },

  editStyle: (element, param, value) => { 
    switch (param) {
      case "background":
        element.style.background = value;
        break;
      case "color":
        element.style.color = value;
        break;
      case "textAlign":
        element.style.textAlign = value;
        break;
      default:
        break;
    }
  },
  clear: (settings) => { // block
    if (settings.block != undefined) {
      settings.block.innerHTML = "";
    } else {
      document.getElementsByClassName("ShizzaHo_Gui_Container")[0].innerHTML = "";
    }
    
  },
}