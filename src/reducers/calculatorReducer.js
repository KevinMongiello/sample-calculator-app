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
      const newInput = action.input;

      if (isNum(currentInput) && isNum(newInput)) {
        newState.userInput = currentInput + newInput; // Add strings together
      } else if (isNum(currentInput) && isOperator(newInput)) {
        newState.userInputs = [...newState.userInputs, Number(currentInput)];
        newState.userInput = newInput;
      } else if (isOperator(currentInput) && isNum(newInput)) {
        newState.userInputs = [...newState.userInputs, currentInput];
        newState.userInput = newInput;
      } else if (isOperator(currentInput) && isOperator(newInput)) {
        newState.userInput = newInput;
      }

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
      const newValue = calculate([...state.userInputs, Number(state.userInput)]);
      const newState = objectAssign({}, state, { userInput: "", value: newValue, userInputs: [] });

      return newState;
    }

    default:
      return state;
  }
}
