import * as types from '../constants/actionTypes';

export function setUserInput(input) {
  return {
    type: types.SET_USER_INPUT,
    input
  };
}

export function calculate() {
  return {
    type: types.CALCULATE
  };
}

// TODO
// export function add(num1, num2) {
//   return {
//     type: types.ADD,
//     num1,
//     num2
//   };
// }

export function clear() {
  return {
    type: types.CLEAR
  };
}

export function recallMemory() {
  return {
    type: types.RECALL_MEMORY
  }
}

export function clearMemory() {
  return {
    type: types.CLEAR_MEMORY
  }
}

export function addMemory() {
  return {
    type: types.ADD_MEMORY
  }
}

export function subtractMemory() {
  return {
    type: types.SUBTRACT_MEMORY
  }
}
