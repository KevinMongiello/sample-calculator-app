import {
  SET_NUMBER,
  SET_OPERATOR,
  CLEAR_INPUTS,
  RECALL_MEMORY,
  CLEAR_MEMORY,
  ADD_TO_MEMORY,
  SUBTRACT_FROM_MEMORY,
  CALCULATE,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function calculator(state = initialState, action) {
  let newState;
  let memOp;

  switch (action.type) {
    case SET_NUMBER: {

      if (state.operator) {
        newState = {
          ...state,
          currentInput: action.payload,
          inputs: [...state.inputs, state.operator],
          operator: "",
        };
      } else {
        newState = {
          ...state,
          currentInput: state.currentInput + action.payload
        }
      }

      return newState;
    }

    case SET_OPERATOR: {
      if (state.operator) { // overwrite current operator
        newState = {
          ...state,
          operator: action.payload
        }
      } else if (state.currentInput) {
        newState = {
          ...state,
          inputs: [...state.inputs, state.currentInput],
          operator: action.payload,
        }
      } else { // No-Op if no operands have been set.
        return state;
      }

      return newState;
    }

    case CALCULATE: {
      let inputs = [...state.inputs]

      if (state.currentInput) {
        inputs.push(state.currentInput);
      }

      const result = calculate(inputs);
      newState = {
        ...state,
        inputs: [],
        currentInput: result,
        operator: ""
      }

      return newState;
    }

    case RECALL_MEMORY:
      return {
        ...state,
        operator: "",
        currentInput: state.memory.toString(),
        inputs: []
      }

    case ADD_TO_MEMORY:
      memOp = "+"
    case SUBTRACT_FROM_MEMORY: // eslint-disable-line no-fallthrough
      if (state.currentInput) {
        return {
          ...state,
          memory: opMap[memOp || "-"](state.memory, Number(state.currentInput))
        }
      } else {
        return state;
      }

    case CLEAR_MEMORY:
      return {
        ...state,
        memory: 0
      }

    case CLEAR_INPUTS:
      return {
        ...state,
        inputs: [],
        currentInput: "",
        operator: ""
      }
    default:
      return state;
  }
}

// Utils
const calculate = (inputs) => {
  ["x", "/", "+", "-"].forEach((operator) => {
    let opIdx = inputs.indexOf(operator);

    while (opIdx >= 0) {
      const a = Number(inputs[opIdx - 1]);
      const b = Number(inputs[opIdx + 1]);

      inputs.splice(opIdx - 1, 3, opMap[operator](a, b));

      opIdx = inputs.indexOf(operator);
    }
  })

  return inputs[0];
}

const opMap = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "x": (a, b) => a * b,
}
