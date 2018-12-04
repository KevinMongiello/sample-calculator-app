import * as types from '../constants/actionTypes';

export function setNumber(num) {
  return {
    type: types.SET_NUMBER,
    num
  };
}

export function setOperator(operator) {
  return {
    type: types.SET_OPERATOR,
    operator
  };
}


// TODO
// export function calculate() {
//   return {
//     type: types.CALCULATE,
//     num
//   };
// }

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
