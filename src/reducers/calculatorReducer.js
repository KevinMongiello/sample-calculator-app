import {
  SET_NUMBER,
  SET_OPERATOR,
  ADD,
  SUBTRACT,
  CLEAR,
  RECALL_MEMORY,
  SUBTRACT_MEMORY,
  ADD_MEMORY,
  CLEAR_MEMORY,
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function calculator(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_NUMBER:
      newState = objectAssign({}, state, {
        value: (state.value + action.num).toString(),
        operation: "",
      });

      return newState;

    case SET_OPERATOR:
      newState = objectAssign({}, state, { operator: action.operator });

      return newState;

    case ADD:
      newState = objectAssign({}, state);

      return newState;

    case SUBTRACT:
      newState = objectAssign({}, state);

      return newState;

    case CLEAR:
      newState = objectAssign({}, state, { display: "0", value: "" });

      return newState;

    case RECALL_MEMORY: {
      const { memory } = state;
      newState = objectAssign({}, state, { display: memory, value: memory });

      return newState;
    }

    case CLEAR_MEMORY:
      newState = objectAssign({}, state, { memory: "0" });

      return newState;

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

    default:
      return state;
  }
}
