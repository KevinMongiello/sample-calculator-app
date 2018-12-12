import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/calculatorActions';
import Calculator from '../calculator';

export class CalculatorContainer extends React.Component {
  inputNumber = (e) => {
    this.props.actions.setNumber(e.target.innerHTML)
  }

  inputOperator = (e) => {
    this.props.actions.setOperator(e.target.innerHTML);
  }

  render() {
    const {
      clearInputs,
      recallMemory,
      clearMemory,
      addToMemory,
      subtractFromMemory,
      calculate,
    } = this.props.actions;
    return (
      <Calculator
        display={this.props.currentInput}
        inputNumber={this.inputNumber}
        inputOperator={this.inputOperator}
        clearInputs={clearInputs}
        recallMemory={recallMemory}
        clearMemory={clearMemory}
        addToMemory={addToMemory}
        subtractFromMemory={subtractFromMemory}
        calculate={calculate}
      />
    );
  }
}

CalculatorContainer.propTypes = {
  currentInput: PropTypes.string,
  operator: PropTypes.string,
  userInput: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = ({ calculator: { currentInput } }) => ({ currentInput });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorContainer);
