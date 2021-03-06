import * as actions from './calculatorActions';
import * as types from '../constants/actionTypes';

describe('setUserInput action', () => {
  it('should have a "num" payload', () => {
    const input = "1"
    const expectedAction = {
      type: types.SET_USER_INPUT,
      input
    }
    expect(actions.setUserInput(input)).toEqual(expectedAction)
  })
})

describe('recallMemory action', () => {
  it('should have a RECALL_MEMORY constant type', () => {
    const expectedAction = {
      type: types.RECALL_MEMORY,
    }
    expect(actions.recallMemory()).toEqual(expectedAction)
  })
})

describe('addMemory action', () => {
  it('should have a ADD_MEMORY constant type', () => {
    const expectedAction = {
      type: types.ADD_MEMORY,
    }
    expect(actions.addMemory()).toEqual(expectedAction)
  })
})

describe('subtractMemory action', () => {
  it('should have a SUBTRACT_MEMORY constant type', () => {
    const expectedAction = {
      type: types.SUBTRACT_MEMORY,
    }
    expect(actions.subtractMemory()).toEqual(expectedAction)
  })
})

describe('clearMemory action', () => {
  it('should have a CLEAR_MEMORY constant type', () => {
    const expectedAction = {
      type: types.CLEAR_MEMORY,
    }
    expect(actions.clearMemory()).toEqual(expectedAction)
  })
})
