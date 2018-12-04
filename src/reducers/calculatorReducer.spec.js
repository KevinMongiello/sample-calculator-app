import {
  SET_NUMBER,
  CLEAR,
  CLEAR_MEMORY,
} from '../constants/actionTypes';
import initialState from "./initialState";
import reducer from './calculatorReducer';

const dirtyState = {
  memory: "10",
  display: "4",
  value: "4"
}

describe('calculator reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  it('should handle SET_NUMBER', () => {
    expect(
      reducer(initialState, {
        type: SET_NUMBER,
        num: 5
      })
    ).toEqual(
      { ...initialState, value: "5"}
    )
  })

  it('should handle CLEAR', () => {
    expect(
      reducer(dirtyState, {
        type: CLEAR,
      })
    ).toEqual(
      {
        memory: "10",
        display: "0",
        value: ""
      }
    )
  })

  it('should handle CLEAR_MEMORY', () => {
    expect(
      reducer(dirtyState, { type: CLEAR_MEMORY })
    ).toEqual({...dirtyState, memory: "0"})
  })
})
