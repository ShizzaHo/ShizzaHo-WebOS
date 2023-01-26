return library = {
  guiContainer: undefined,
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
  addBlock: (name, layoutType , block = "ShizzaHo_Gui_Container") => {
    const blockDiv = document.createElement('div');
    blockDiv.classList.add(name);
    switch(layoutType){
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
    document.getElementsByClassName(block)[0].appendChild(blockDiv);

    return blockDiv;
  },
  addText: (textContent, color, block = "ShizzaHo_Gui_Container") => {
    const text = document.createElement('span');
    text.textContent = textContent;
    text.style.color = color;
    document.getElementsByClassName(block)[0].appendChild(text);

    return text;
  },
  addSeparator: (block = "ShizzaHo_Gui_Container") => {
    const separator = document.createElement('br');
    document.getElementsByClassName(block)[0].appendChild(separator);

    return separator;
  },
  addButton: (text, callback, block = "ShizzaHo_Gui_Container") => {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add("ShizzaHo_Gui_Button");
    button.onclick = ()=>{callback(button)};
    document.getElementsByClassName(block)[0].appendChild(button);

    return button;
  },
}