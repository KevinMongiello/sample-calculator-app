import * as types from '../constants/actionTypes';

export const setNumber = (payload) => ({ type: types.SET_NUMBER, payload })
export const setOperator = (payload) => ({ type: types.SET_OPERATOR, payload })
export const clearInputs = () => ({ type: types.CLEAR_INPUTS })
export const recallMemory = () => ({ type: types.RECALL_MEMORY })
export const clearMemory = () => ({ type: types.CLEAR_MEMORY })
export const addToMemory = () => ({ type: types.ADD_TO_MEMORY })
export const subtractFromMemory = () => ({ type: types.SUBTRACT_FROM_MEMORY })
export const calculate = () => ({ type: types.CALCULATE })
