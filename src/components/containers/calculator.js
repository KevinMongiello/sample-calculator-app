import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/calculatorActions';
import Calculator from '../calculator';

export class CalculatorContainer extends React.Component {
  addNumbers = (num1, num2) => {
    this.props.actions.add(num1, num2);
  }

  onClick = (handler) => (e) => {
    const button = e.target.innerHTML;

    handler(button);
  }

  onOperand = (operand) => {
    this.props.actions.setNumber(operand);
  }

  //TODO
  // onEquals = () => {
  //   this.props.actions.calculate();
  // }

  onOperator = (operator) => {
    this.props.actions.setOperator(operator)
  }

  onClear = () => {
    this.props.actions.clear();
  }


  onRecallMemory = () => {
    this.props.actions.recallMemory();
  }

  onClearMemory = () => {
    this.props.actions.clearMemory();
  }

  onAddMemory = () => {
    this.props.actions.addMemory();
  }

  onSubtractMemory = () => {
    this.props.actions.subtractMemory();
  }

  render() {
    return (
      <Calculator
        value={this.props.value}
        operator={this.props.operator}
        display={this.props.display}
        onClick={this.onClick(this.onOperand)}
        onClickOperator={this.onClick(this.onOperator)}
        onClickEquals={this.onClick(this.onEquals)}
        onClearMemory={this.onClearMemory}
        onRecallMemory={this.onRecallMemory}
        onAddMemory={this.onAddMemory}
        onSubtractMemory={this.onSubtractMemory}
        onClear={this.onClear}
      />
    );
  }
}

CalculatorContainer.propTypes = {
  value: PropTypes.string,
  operator: PropTypes.string,
  display: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps({ calculator: { value, display, operator } }) {
  return {
    value,
    display,
    operator,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorContainer);
