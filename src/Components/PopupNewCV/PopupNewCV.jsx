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
import { connect } from 'react-redux';
import { setUsersAC } from '../../redux/user-reducer';
import ReactNotification from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css';

class PopupNewCV extends Component {
  constructor(props) {
    super(props);
    this.notificationDOMRef = React.createRef();
  }

  addNotificationError = error => {
    this.notificationDOMRef.current.addNotification({
      title: ' Error ',
      message: error,
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  };

  addNotificationSuccess = () => {
    this.notificationDOMRef.current.addNotification({
      title: ' Success ',
      message: 'successfully!',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  };

  setValueInState = (changeID, change) => {
    this.setState({ [changeID]: change });
    this.setButtonPermissions();
  };

  state = {
    open: false,
    disabledAdd: true
  };

  setButtonPermissions = () => {
    const { source, Name, position, URL } = this.state;
    source && Name && position && URL
      ? this.setState({ disabledAdd: false })
      : this.setState({ disabledAdd: true });
  };

  addCV = () => {
    const { source, Name, position, URL, From } = this.state;
    const resultObject = {
      adviser: From || '',
      url: URL,
      fullName: Name,
      date: moment(new Date()).format('YYYY-MM-DDT00:00:00'),
      source: source,
      statuses: '',
      subject: '',
      checked: true,
      position: this.props.positions.find(item => item.name === position)
    };
    const data = JSON.stringify(resultObject);
    Services.fetchJsonPost(Constants.BASIC_URL, data)
      .then(response => {
        if (response.status === 200) {
          this.addNotificationSuccess('CV was successfully added!')
        } else {
          this.addNotificationError('error');
        }
      })
      .catch(error => {
        this.addNotificationError(error.message);
      });
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      disabledAdd: true,
      source: undefined,
      Name: undefined,
      position: undefined,
      URL: undefined,
      From: undefined
    });
  };

  render() {
    const positions = this.props.positions;
    const { open, source, disabledAdd } = this.state;
    return (
      <div>
        <Button text={'add new CV'} onClick={this.handleOpen} />
        <Dialog
          className="popup"
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <ReactNotification ref={this.notificationDOMRef} />

          <DialogTitle id="form-dialog-title">Add new CV</DialogTitle>
          <DialogContent>
            <Select
              autoFocus
              required={true}
              onChange={event =>
                this.setValueInState(
                  'source',
                  Constants.sourcesForAddCV.find(
                    item => item.name === event.target.value
                  ).id
                )
              }
              options={Constants.sourcesForAddCV}
              title={'Source'}
            />
            {source === 3 && (
              <TextField
                margin="dense"
                id="From"
                label="From"
                type="text"
                fullWidth
                onChange={event =>
                  this.setValueInState('From', event.target.value)
                }
              />
            )}
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
            <Select
              onChange={event =>
                this.setValueInState('position', event.target.value)
              }
              options={positions}
              title={'Position'}
            />
            <TextField
              margin="dense"
              id="URLtoDocument"
              label="URL to Document"
              type="text"
              fullWidth
              onChange={event =>
                this.setValueInState('url', event.target.value)
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} text={'Cancel'} />
            <Button
              disabled={disabledAdd}
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
    statuses: state.usersPage.statuses,
    positions: state.usersPage.positions,
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
)(PopupNewCV);
