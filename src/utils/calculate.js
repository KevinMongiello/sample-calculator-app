export const calculate = (inputs) => {
  const newInputs = [...inputs];

  // if (inputs.length <= 1) return inputs;
  while (isMultiplicationPresent(newInputs)) {
    const idx = newInputs.indexOf("x");
    const fn = arithmetic.get(newInputs[idx]);
    const combined = fn(newInputs[idx - 1], newInputs[idx + 1]);

    newInputs.splice(idx - 1, 3, combined);
  }

  return newInputs[0]
}

const isMultiplicationPresent = (array) => (array.indexOf("x") >= 0)
const isDivisionPresent = (array) => (array.indexOf("/") >= 0)

const arithmetic = new Map()
  .set("x", (num1, num2) => (num1 * num2))
  .set("/", (num1, num2) => (num1 / num2))
  .set("+", (num1, num2) => (num1 + num2))
  .set("-", (num1, num2) => (num1 - num2))
