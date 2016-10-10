import React, {Component} from 'react';
import TextFieldSmall from '../components/TextFieldSmall';
import TextField from 'material-ui/TextField';
import {FormattedMessage} from 'react-intl';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Determinant from '../helpers/determinant';


const styles = {
  result: {
    height: 50,
    lineHeight:'50px',
    width: 50,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block'
  }
};

class Chapter_1_1 extends Component {

  state = {
    orderLength: 3,
    order: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    result: 0
  };


  handleSetOrderLength = (e) => {
    this.setState({
      orderLength: e.target.value
    }, () => {
      this.setState({
        order: this.createOrder()
      });
    });
  };

  handleCalculate = () => {
    const determinant = new Determinant(this.state.order);
    this.setState({
      result: determinant.calculate()
    });
  };


  createOrder() {
    let order = [];
    for (let i = 0; i < this.state.orderLength; i++) {
      order[i] = [];
      for (let j = 0; j < this.state.orderLength; j++) {
        order[i][j] = 0;
      }
    }
    return order;
  }


  handleTextFieldChange(i, iNext, event) {
    let newValue = event.target.value;
    let order = this.state.order;
    if (!/^\d+\.$/.test(newValue)) {
      newValue = Number.isNaN(parseFloat(newValue)) ? 0 : parseFloat(newValue);
    }
    order[i][iNext] = newValue;
    this.setState({
      order: order
    });
  }


  render() {
    const {order, stepIndex, orderLength, result} = this.state;

    return (
      <Stepper
        activeStep={stepIndex}
        linear={false}
        orientation="vertical">
        <Step active={true}>
          <StepButton>
            <FormattedMessage id="chapter_1_1_subtitle_1"/>
          </StepButton>
          <StepContent>
            <TextField
              floatingLabelText={<FormattedMessage id="chapter_1_1_subtitle_1_label"/>}
              onChange={this.handleSetOrderLength}
              type="number"
              value={orderLength}/>
          </StepContent>
        </Step>
        <Step active={true}>
          <StepButton>
            <FormattedMessage id="chapter_1_1_subtitle_2"/>
          </StepButton>
          <StepContent>
            {order.map((o, i) => (
              <div key={`order-${i}`}>
                {o.map((oNext, iNext) => (
                  <TextFieldSmall key={`order-${i}-${iNext}`}
                                  value={oNext}
                                  handleChange={this.handleTextFieldChange.bind(this, i, iNext)}/>
                ))}
              </div>
            ))}
            <div>
              <RaisedButton
                label={<FormattedMessage id="calculate"/>}
                disableTouchRipple={true}
                disableFocusRipple={true}
                primary={true}
                onTouchTap={this.handleCalculate}
                style={{marginRight: 12}}/>
            </div>
          </StepContent>
        </Step>
        <Step active={true}>
          <StepButton>
            <FormattedMessage id="chapter_1_1_subtitle_3"/>
          </StepButton>
          <StepContent>
            <Paper style={styles.result} zDepth={1} circle={true}>
              {result}
            </Paper>
          </StepContent>
        </Step>
      </Stepper>
    );
  }
}

export default Chapter_1_1;