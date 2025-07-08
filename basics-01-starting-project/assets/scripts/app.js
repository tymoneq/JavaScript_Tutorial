let currentResult = 0;

function add(num1, num2) {
  return num1 + num2;
}

currentResult += add(10, currentResult);

let calculationDescription = `Added 10 to the initial value. New result is ${currentResult}.`;

outputResult(currentResult, calculationDescription);
