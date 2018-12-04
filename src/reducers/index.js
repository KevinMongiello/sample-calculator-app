import { combineReducers } from 'redux';
import calculator from './calculatorReducer';

const rootReducer = combineReducers({
  calculator,
});

export default rootReducer;
