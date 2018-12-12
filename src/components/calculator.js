import React from 'react';
import PropTypes from 'prop-types';

const Calculator = ({
  display,
  inputNumber,
  inputOperator,
  clearInputs,
  recallMemory,
  clearMemory,
  addToMemory,
  subtractFromMemory,
  calculate,
}) => (
  <div>
    <div id="calculator">
      <div className="top">
        <span className="clear" onClick={clearInputs}>C</span>
        <div className="screen">{display || "0"}</div>
      </div>
      <div className="keys">
        <span onClick={recallMemory}>MR</span>
        <span onClick={addToMemory}>M+</span>
        <span onClick={subtractFromMemory}>M-</span>
        <span onClick={clearMemory} className="row-end">MC</span>

        <span onClick={inputNumber}>7</span>
        <span onClick={inputNumber}>8</span>
        <span onClick={inputNumber}>9</span>
        <span onClick={inputOperator} className="row-end">+</span>

        <span onClick={inputNumber}>4</span>
        <span onClick={inputNumber}>5</span>
        <span onClick={inputNumber}>6</span>
        <span onClick={inputOperator} className="row-end">-</span>

        <span onClick={inputNumber}>1</span>
        <span onClick={inputNumber}>2</span>
        <span onClick={inputNumber}>3</span>
        <span onClick={inputOperator} className="row-end">x</span>

        <span onClick={inputNumber}>0</span>
        <span onClick={inputNumber}>.</span>
        <span onClick={calculate}>=</span>
        <span onClick={inputOperator} className="row-end">/</span>
      </div>
    </div>
  </div>
);

Calculator.propTypes = {
  display: PropTypes.number,
  inputNumber: PropTypes.func,
  inputOperator: PropTypes.func,
  clearInputs: PropTypes.func,
  recallMemory: PropTypes.func,
  clearMemory: PropTypes.func,
  addToMemory: PropTypes.func,
  subtractFromMemory: PropTypes.func,
  calculate: PropTypes.func,
};

export default Calculator;
