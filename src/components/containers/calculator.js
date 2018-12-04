import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/calculatorActions';
import Calculator from '../calculator';

export class CalculatorContainer extends React.Component {
  onUserInput = (e) => {
    this.props.actions.setUserInput(e.target.innerHTML);
  }

  onEquals = () => {
    this.props.actions.calculate();
  }

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
        userInput={this.props.userInput}
        onClick={this.onUserInput}
        onClickEquals={this.onEquals}
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
  userInput: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps({ calculator: { value, userInput, operator } }) {
  return {
    value,
    userInput,
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
