let currentResult = 0;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  logEntries.push(operator);
  console.log(logEntries);

  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  currentResult += enteredNumber;

  let logEntry = {
    operation: "ADD",
    prevResult: currentResult - enteredNumber,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);

  createAndWriteOutput("+", currentResult - enteredNumber, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  currentResult -= enteredNumber;
  createAndWriteOutput("-", currentResult + enteredNumber, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  currentResult *= enteredNumber;
  createAndWriteOutput("*", currentResult / enteredNumber, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  currentResult /= enteredNumber;
  createAndWriteOutput("/", currentResult * enteredNumber, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
