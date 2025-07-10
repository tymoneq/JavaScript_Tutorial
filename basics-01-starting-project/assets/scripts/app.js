let currentResult = 0;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operation, prevResult, number, result) {
  let logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}


function add() {
  const enteredNumber = getUserInput();
  currentResult += enteredNumber;
  createAndWriteOutput("+", currentResult - enteredNumber, enteredNumber);
  writeToLog(
    "ADD",
    currentResult - enteredNumber,
    enteredNumber,
    currentResult
  );
}

function subtract() {
  const enteredNumber = getUserInput();
  currentResult -= enteredNumber;
  createAndWriteOutput("-", currentResult + enteredNumber, enteredNumber);
  writeToLog(
    "SUBTRACT",
    currentResult + enteredNumber,
    enteredNumber,
    currentResult
  );
}

function multiply() {
  const enteredNumber = getUserInput();
  currentResult *= enteredNumber;
  createAndWriteOutput("*", currentResult / enteredNumber, enteredNumber);
  writeToLog(
    "MULTIPLY",
    currentResult / enteredNumber,
    enteredNumber,
    currentResult
  );
}

function divide() {
  const enteredNumber = getUserInput();
  currentResult /= enteredNumber;
  createAndWriteOutput("/", currentResult * enteredNumber, enteredNumber);
  writeToLog(
    "DIVIDE",
    currentResult * enteredNumber,
    enteredNumber,
    currentResult
  );
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
