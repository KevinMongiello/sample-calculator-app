import * as actions from './calculatorActions';
import * as types from '../constants/actionTypes';

describe('setNumber action', () => {
  it('should have a "num" payload', () => {
    const num = "1"
    const expectedAction = {
      type: types.SET_NUMBER,
      num
    }
    expect(actions.setNumber(num)).toEqual(expectedAction)
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
