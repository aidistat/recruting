import React, { Component } from 'react';
import SelectUI from '@material-ui/core/Select';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

class Select extends Component {
  render() {
    let { onChange, options, title } = this.props;
    return (
        <FormControl>
          <InputLabel htmlFor="age-native-simple">{title}</InputLabel>
          <SelectUI
              native
              onChange={onChange}
          >
            <option value="" />
            {options.map((option, i) => {
              return <option key={i}>{option}</option>;
            })}
          </SelectUI>
        </FormControl>
    );
  }
}

export default Select;
