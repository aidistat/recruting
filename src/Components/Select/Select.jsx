import React, { Component } from 'react';
import SelectUI from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './select.css';

class Select extends Component {
  render() {
    let { onChange, options, title, value } = this.props;
    return (
      <FormControl>
        <InputLabel htmlFor="profile">{title}</InputLabel>
        <SelectUI
          native
          value={value}
          onChange={onChange}
          inputProps={{
            name: 'profile',
            id: 'profile'
          }}
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
