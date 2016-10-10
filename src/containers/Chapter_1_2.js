import React, {Component} from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import Arrangement from '../helpers/arrangement';
import TextField from 'material-ui/TextField';
import {FormattedMessage} from 'react-intl';
import Paper from 'material-ui/Paper';

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

class Chapter_1_2 extends Component {
  state = {
    result: 0,
    arrangement: ''
  };


  handleCalculate = () => {
    let arrangement_real = new Arrangement(this.state.arrangement);
    this.setState({
      result: arrangement_real.inverseOrdinalNumbers()
    });
  };


  handleSetArrangement = (e) => {
    this.setState({
      arrangement: e.target.value
    });
  };


  render() {
    const {arrangement, result} = this.state;

    return (
        <Stepper linear={false} orientation="vertical">
          <Step active={true}>
            <StepButton>
              <FormattedMessage id="chapter_1_2_subtitle_1"/>
            </StepButton>
            <StepContent>
              <TextField
                floatingLabelText={<FormattedMessage id="chapter_1_2_subtitle_1_label"/>}
                onChange={this.handleSetArrangement}
                type="number"
                value={arrangement}/>
              <div>
                <RaisedButton
                  label={<FormattedMessage id="chapter_1_2_calculate"/>}
                  disableTouchRipple={true}
                  disableFocusRipple={true}
                  primary={true}
                  onTouchTap={this.handleCalculate}/>
              </div>
            </StepContent>
          </Step>
          <Step active={true}>
            <StepButton>
              <FormattedMessage id="chapter_1_2_subtitle_2"/>
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

export default Chapter_1_2;