import React, { Component } from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as Constants from '../../Constants/constants';
import * as Services from '../../Services/basicServices';
import moment from 'moment';
import Error from '../Error/Error';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';

import { setUsersAC } from '../../redux/user-reducer';

class PopupUpdateCV extends Component {
  setValueInState = (changeID, change) => {
    this.setState({ [changeID]: change });
  };

  state = {
    open: false
  };

  updateUsers = () => {
    Services.fetchJson(Constants.URL + `?page=1`).then((
      data //TODO page=1 need to finish
    ) => this.props.setUsers(data.content));
  };

  updateCV = () => {
    const { source, Name, position, URL } = this.state;
    const resultObject = {
      fullName: Name,
      date: moment(new Date()).format('YYYY-MM-DDTHH:MM:SS'),
      source: Constants.SOURCE[source],
      statuses: '',
      subject: '',
      checked: true,
      position: {
        name: position,
        id: Constants.POSITIONS[position]
      }
    };
    const data = JSON.stringify(resultObject);
    Services.fetchJsonPost(Constants.URL, data)
      .then(response =>
        response.status === 200
          ? this.setState({
              open: false
            })
          : this.setState({
              open: true,
              error: response.message
            })
      )
      .then(this.updateUsers())
      .catch(error => this.setState({ error: error.message }));
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, source, error, disabledAdd } = this.state;

    const sourceOptions = Constants.TECHNOLOGIES_FOR_ADD;
    return (
      <div>
        <Button text={'UpdateCV'} onClick={this.handleOpen} />
        <Dialog
          className="popup"
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="form-dialog-title">Update CV</DialogTitle>
          <DialogContent>
            {error && <Error error={error} />}
            <Select
              autoFocus
              required={true}
              onChange={event =>
                this.setValueInState('source', event.target.value)
              }
              options={sourceOptions}
              title={'Source'}
            />
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              onChange={event =>
                this.setValueInState('Name', event.target.value)
              }
            />
            <Calendar
              label={'date'}
              onChange={event =>
                this.setValueInState('date', event.target.value)
              }
            />
            <Select
              onChange={event =>
                this.setValueInState('position', event.target.value)
              }
              options={Constants.TECHNOLOGIES}
              title={'Position'}
            />
            <Select
              onChange={event =>
                this.setValueInState('checked', event.target.value)
              }
              options={Constants.STATUS}
              title={'Checked'}
            />
            <TextField
              margin="dense"
              id="URL to Document"
              label="URL to Document"
              type="text"
              fullWidth
              onChange={event =>
                this.setValueInState('URL', event.target.value)
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} text={'Cancel'} />
            <Button onClick={this.handleClose} text={'Delete'} />

            <Button
              disabled={disabledAdd}
              onClick={() => this.updateCV()}
              text={'SAVE'}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupUpdateCV);
