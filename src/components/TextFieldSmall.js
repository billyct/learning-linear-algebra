import React, { Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';


const styles = {
  inputStyle: {
    textAlign: 'center'
  },
  field: {
    maxWidth: 100
  }

};

class TextFieldSmall extends Component {

  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  };

  static defaultProps = {
    value : 0
  };


  render() {
    const {
      value,
      handleChange
    } = this.props;

    return (
      <TextField
        id={`text-field-small`}
        value={value}
        onChange={handleChange}
        inputStyle={styles.inputStyle}
        style={styles.field}
      />
    );
  }
}

export default TextFieldSmall;