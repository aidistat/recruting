import React, { Component } from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as Constants from '../../Constants/constants';
import Calendar from '../Calendar/Calendar';
import * as Services from '../../Services/basicServices';

export default class AlertDialog extends Component {
  setThisState = (changeID, change) => {
    this.setState({ [changeID]: change });
    console.log(this.state);
    this.setButtonPermissions();
  };

  setButtonPermissions = () => {
    this.state.sourse &&
    this.state.Name &&
    this.state.Position &&
    this.state.URL &&
    this.state.date
      ? this.setState({ disabledAdd: false })
      : this.setState({ disabledAdd: true });
  };

  state = {
    open: false,
    disabledAdd: false
  };

  addCV = () => {
    const resultObject = {
      fullName: this.state.Name,
      date: this.state.date,
      source: 2,
      statuses: '',
      subject: '',
      checked: true,
      position: {
        name: this.state.position,
        id: 1
      }
    };

    const data = JSON.stringify(resultObject);
    Services.fetchJsonPost(Constants.URL, data);
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const sourse = Constants.TECHNOLOGIES_FOR_ADD;
    return (
      <div>
        <Button text={'add new CV'} onClick={this.handleClickOpen} />
        <Dialog
          className="popup"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="form-dialog-title">Add new CV</DialogTitle>
          <DialogContent>
            <Select
              autoFocus
              required={true}
              onChange={event =>
                this.setThisState('sourse', event.target.value)
              }
              options={sourse}
              title={'Sourse'}
            />
            {this.state.sourse === 'Recomented' ? (
              <TextField
                margin="dense"
                id="name"
                label="From"
                type="text"
                fullWidth
                onChange={event =>
                  this.setThisState('From', event.target.value)
                }
              />
            ) : (
              <div />
            )}
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              onChange={event => this.setThisState('Name', event.target.value)}
            />
            <Select
              onChange={event =>
                this.setThisState('Position', event.target.value)
              }
              options={Constants.TECHNOLOGIES}
              title={'Position'}
            />
            <TextField
              margin="dense"
              id="name"
              label="URL to Document"
              type="text"
              fullWidth
              onChange={event => this.setThisState('URL', event.target.value)}
            />
            <Calendar
              onChange={event => this.setThisState('date', event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} text={'Cancel'} />
            <Button
              disabled={this.state.disabledAdd}
              onClick={() => this.addCV()}
              text={'Add'}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
