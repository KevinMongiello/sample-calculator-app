export const calculate = (inputs) => {
  const newInputs = [...inputs];

  while (isMultiplicationPresent(newInputs)) {
    const idx = newInputs.indexOf("x");
    combineIndicies(idx, newInputs);
  }
  while (isDivisionPresent(newInputs)) {
    const idx = newInputs.indexOf("/");
    combineIndicies(idx, newInputs);
  }
  while (isAdditionPresent(newInputs)) {
    const idx = newInputs.indexOf("+");
    combineIndicies(idx, newInputs);
  }
  while (isSubtractionPresent(newInputs)) {
    const idx = newInputs.indexOf("-");
    combineIndicies(idx, newInputs);
  }

  return newInputs[0].toString();
}

const combineIndicies = (idx, newInputs) => {
  const fn = arithmetic.get(newInputs[idx]),
    operand1 = Number(newInputs[idx - 1]),
    operand2 = Number(newInputs[idx + 1]),
    combined = fn(operand1, operand2);

  newInputs.splice(idx - 1, 3, combined);
}

const isMultiplicationPresent = (array) => (array.indexOf("x") >= 0),
  isDivisionPresent = (array) => (array.indexOf("/") >= 0),
  isAdditionPresent = (array) => (array.indexOf("+") >= 0),
  isSubtractionPresent = (array) => (array.indexOf("-") >= 0);

const arithmetic = new Map()
  .set("x", (num1, num2) => (num1 * num2))
  .set("/", (num1, num2) => (num1 / num2))
  .set("+", (num1, num2) => (num1 + num2))
  .set("-", (num1, num2) => (num1 - num2));
