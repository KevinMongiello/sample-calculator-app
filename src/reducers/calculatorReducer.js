import {
  SET_USER_INPUT,
  CLEAR,
  RECALL_MEMORY,
  SUBTRACT_MEMORY,
  ADD_MEMORY,
  CLEAR_MEMORY,
  CALCULATE,
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import { calculate } from "../utils/calculate";

const isOperator = (input) => /[+-/x]/.test(input);
const isNum = (input) => !isNaN(Number(input));

export default function calculator(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_USER_INPUT: {
      newState = objectAssign({}, state);

      const currentInput = state.userInput;
      const currentValue = state.value;
      const newInput = action.input;

      const shouldAppendInput = (isNum(currentValue) && isNum(newInput)) || newInput === ".";
      const shouldAddToStack = (currentValue && isOperator(newInput)) || (isOperator(currentValue) && isNum(newInput));
      const shouldAssignInput = (isOperator(currentInput) && isOperator(newInput)) || !currentInput

      if (shouldAppendInput) {
        newState.userInput = currentInput + newInput;
      } else if (shouldAddToStack) {
        newState.userInputs = [...newState.userInputs, currentValue];
        newState.userInput = newInput;
      } else if (shouldAssignInput) {
        newState.userInput = newInput;
      }

      newState.value = newState.userInput;

      return newState;
    }

    case CLEAR:
      newState = objectAssign({}, state, { userInput: "", value: 0 });

      return newState;

    case RECALL_MEMORY: {
      const { memory } = state;
      newState = objectAssign({}, state, { display: memory, value: memory });

      return newState;
    }

    case ADD_MEMORY: {
      const { memory, value } = state;
      const newMemory = Number(memory) + Number(value);

      newState = objectAssign({}, state, { memory: newMemory.toString() });

      return newState;
    }

    case SUBTRACT_MEMORY: {
      const { memory, value } = state;
      const newMemory = Number(memory) - Number(value);

      newState = objectAssign({}, state, { memory: newMemory.toString() });

      return newState;
    }

    case CLEAR_MEMORY:
      newState = objectAssign({}, state, { memory: "0" });

      return newState;

    case CALCULATE: {
      if (!state.userInputs[0]) {
        return state;
      }
      const newValue = isNum(state.userInput) ?
        calculate([...state.userInputs, state.userInput]) :
        calculate(state.userInputs); // disregard trailing operators.

      const newState = objectAssign({}, state, { userInput: "", value: newValue, userInputs: [] });

      return newState;
    }

    default:
      return state;
  }
}
