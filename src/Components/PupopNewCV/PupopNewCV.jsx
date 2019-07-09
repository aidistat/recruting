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

import { setUsersAC } from '../../redux/user-reducer';

class PupopNewCV extends Component {
  setThisState = (changeID, change) => {
    this.setState({ [changeID]: change });
    this.setButtonPermissions();
  };

  state = {
    open: false,
    disabledAdd: true
  };

  setButtonPermissions = () => {
    this.state.sourse &&
    this.state.Name &&
    this.state.position &&
    this.state.URL
      ? this.setState({ disabledAdd: false })
      : this.setState({ disabledAdd: true });
  };

  updateUsers = () => {
    Services.fetchJson(Constants.URL + `?page=1`).then((
      data //TODO page=1 need to finish
    ) => this.props.setUsers(data.content));
  };

  addCV = () => {
    const resultObject = {
      fullName: this.state.Name,
      date: moment(new Date()).format('YYYY-MM-DDTHH:MM:SS'),
      source: Constants.SOURSE[this.state.sourse],
      statuses: '',
      subject: '',
      checked: true,
      position: {
        name: this.state.position,
        id: Constants.POSITIONS[this.state.position]
      }
    };
    const data = JSON.stringify(resultObject);
    Services.fetchJsonPost(Constants.URL, data)
      .then(response =>
        response.status === 200
          ? this.setState({
              open: false,
              disabledAdd: true
            })
          : this.setState({
              open: true,
              disabledAdd: true,
              error: response.message
            })
      )
      .then(this.updateUsers())
      .catch(error => this.setState({ error: error.message }));
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
            {this.state.error ? <Error error={this.state.error} /> : <div />}
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
                this.setThisState('position', event.target.value)
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
)(PupopNewCV);
