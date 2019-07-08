import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '../Button/Button';
import TextField from '@material-ui/core/TextField';
import './newVacancy.css';
import * as Services from '../../Services/basicServices';
import * as Constants from '../../Constants/constants';

export default class AlertDialog extends Component {
  state = {
    open: false,
      position: ''
  };
  addVacancy = () => {
    let response = Services.fetchJsonPost(Constants.URL_POSITION, JSON.stringify({name: this.state.position}));
    console.log(response)
  };
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  vacancy = (e) => {
      this.setState({
          position: e.target.value
      })
  }
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
          text="Add new vacancy"
        />
        <Dialog
          className="popup"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <h1>Add new vacancy</h1>
          <TextField id="standard-name" label="Name" margin="normal" onChange={(e) => this.vacancy(e)} />
          <Button text="ADD" onClick={this.addVacancy} />
          <Button text="Cancel" onClick={this.handleClose} />
        </Dialog>
      </div>
    );
  }
}
