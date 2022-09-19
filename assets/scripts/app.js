const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function calculation(type) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (type === "ADD") {
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
  } else if (type === "SUB") {
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
  } else if (type === "MUL") {
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
  } else if (type === "DIV") {
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
  }
}

function add() {
  calculation("ADD");
}

function subtract() {
  calculation("SUB");
}

function multiply() {
  calculation("MUL");
}

function divide() {
  calculation("DIV");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
