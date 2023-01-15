let consoleInputActive = false;

const consoleOutput = (text) => {
  const output = document.createElement('p');
  output.textContent = text;
  document.body.appendChild(output);
};

const consoleInput = (text, callback) => {
  consoleInputActive = true;

  const inputContainer = document.createElement('div');
  const hint = document.createElement('a');
  const input = document.createElement('input');

  hint.textContent = text + ' > ';
  inputContainer.classList.add('console__inputContainer');
  input.classList.add('console__inputContainer__input');

  document.body.appendChild(inputContainer);
  inputContainer.appendChild(hint);
  inputContainer.appendChild(input);

  input.focus();

  let waiter = setInterval(()=>{
    if (consoleInputActive) {
      // wait
    } else {
      callback(input.value);
      input.disabled = true;
      clearInterval(waiter);
    }
  }, 100)
};

document.body.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && consoleInputActive == true) {
    consoleInputActive = false;
  }
})