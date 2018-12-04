import {
  SET_USER_INPUT,
  CLEAR,
  RECALL_MEMORY,
  ADD_MEMORY,
  SUBTRACT_MEMORY,
  CLEAR_MEMORY,
} from '../constants/actionTypes';
import initialState from "./initialState";
import reducer from './calculatorReducer';

const mockState = {
  userInput: "4",
  value: "4",
  memory: "10",
  userInputs: [],
};

describe('calculator reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  it('inputs a number', () => {
    expect(
      reducer(initialState, {
        type: SET_USER_INPUT,
        input: 5
      })
    ).toEqual(
      { ...initialState, value: "5", userInput: "5"}
    )
  })

  it('clears', () => {
    expect(
      reducer(mockState, {
        type: CLEAR,
      })
    ).toEqual(
      {
        memory: "10",
        userInput: "",
        value: "0",
        userInputs: []
      }
    )
  })

  describe('memory functions', () => {
    it('recalls memory', () => {
      expect(
        reducer(mockState, { type: RECALL_MEMORY})
      ).toEqual({...mockState, display: "10", value: "10" })
    })

    it('adds to memory', () => {
      expect(
        reducer(mockState, { type: ADD_MEMORY})
      ).toEqual({...mockState, memory: "14" })
    })

    it('subtracts from memory', () => {
      expect(
        reducer(mockState, { type: SUBTRACT_MEMORY})
      ).toEqual({...mockState, memory: "6" })
    })

    it('clears memory', () => {
      expect(
        reducer(mockState, { type: CLEAR_MEMORY })
      ).toEqual({...mockState, memory: "0"})
    })

  })
})
