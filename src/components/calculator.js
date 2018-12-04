import React from 'react';
import { func, string } from 'prop-types';

const Calculator = ({
  value,
  userInput,
  onClick,
  onClickEquals,
  onRecallMemory,
  onAddMemory,
  onSubtractMemory,
  onClearMemory,
  onClear
}) => (
  <div>
    <h1>Calculator App</h1>
    <div id="calculator">
      <div className="top">
        <span className="clear" onClick={onClear}>C</span>
        <div className="screen">{userInput || value}</div>
      </div>
      <div className="keys">
        <span onClick={onRecallMemory}>MR</span>
        <span onClick={onAddMemory}>M+</span>
        <span onClick={onSubtractMemory}>M-</span>
        <span onClick={onClearMemory} className="operator">MC</span>
        <span onClick={onClick}>7</span>
        <span onClick={onClick}>8</span>
        <span onClick={onClick}>9</span>
        <span onClick={onClick} className="operator">+</span>
        <span onClick={onClick}>4</span>
        <span onClick={onClick}>5</span>
        <span onClick={onClick}>6</span>
        <span onClick={onClick} className="operator">-</span>
        <span onClick={onClick}>1</span>
        <span onClick={onClick}>2</span>
        <span onClick={onClick}>3</span>
        <span onClick={onClick} className="operator">x</span>
        <span onClick={onClick}>0</span>
        <span onClick={onClick}>.</span>
        <span onClick={onClickEquals}>=</span>
        <span onClick={onClick} className="operator">/</span>
      </div>
    </div>
  </div>
);

Calculator.propTypes = {
  onClick: func.isRequired,
  userInput: string.isRequired,
  value: string.isRequired,
  onClickEquals: func.isRequired,
  onClickOperator: func.isRequired,
  onRecallMemory: func.isRequired,
  onAddMemory: func.isRequired,
  onSubtractMemory: func.isRequired,
  onClearMemory: func.isRequired,
  onClear: func.isRequired,
};

export default Calculator;
