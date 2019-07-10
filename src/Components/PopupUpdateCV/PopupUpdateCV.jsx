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
import Calendar from '../Calendar/Calendar';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { setUsersAC } from '../../redux/user-reducer';

class PopupUpdateCV extends Component {
  setValueInState = (changeID, change) => {
    this.setState({ [changeID]: change });
  };

  constructor(props) {
    super(props);
    this.notificationDOMRef = React.createRef();
  }

  state = {
    open: false
  };

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

  updateCV = () => {
    const { Name, position, URL, checked, status } = this.state;
    const resultObject = {
      adviser: '',
      fullName: Name,
      id: this.props.user.id,
      date: moment(this.state.date).format('YYYY-MM-DDT00:00:00'),
      source: this.props.user.source,
      statuses: status || '',
      subject: '',
      checked: checked,
      url: URL,
      position: {
        name: position,
        id: Constants.POSITIONS[position]
      }
    };
    const data = JSON.stringify(resultObject);
    console.log(resultObject)
    Services.fetchJsonPUT(Constants.URL + '/' + this.props.user.id, data)
      .then(response => {
        if (response.status === 200) {
          this.handleClose();
          this.addNotificationSuccess();
        } else {
          this.addNotificationError('error');
        }
      })
      .catch(error => this.addNotificationError(error.message));
  };

  deeleteCV = () => {
    Services.fetchDelete(Constants.URL + '/' + this.props.user.id)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.handleClose();
          this.addNotificationSuccess();
        } else {
          this.addNotificationError('error');
        }
      })
      .catch(error => {
        this.addNotificationError(error.message);
      });
  };

  handleOpen = () => {
    const user = this.props.user;
    this.setState({
      status: user.statuses,
      URL: user.url || '',
      Name: user.fullName,
      date: user.date ,
      position: user.position.name,
      checked:
        String(user.checked)
          .charAt(0)
          .toUpperCase() + String(user.checked).slice(1)
    })
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, Name, date, position, checked, status, URL } = this.state;

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
          <ReactNotification ref={this.notificationDOMRef} />
          <DialogTitle id="form-dialog-title">Update CV</DialogTitle>
          <DialogContent>
            <TextField
              value={Name}
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
              value={moment(date).format('YYYY-MM-DD')}
              label={'date'}
              onChange={event =>
                this.setValueInState('date', event.target.value)
              }
            />
            <Select
              value={position}
              onChange={event =>
                this.setValueInState('position', event.target.value)
              }
              options={Constants.TECHNOLOGIES}
              title={'Position'}
            />
            <Select
              value={checked}
              onChange={event =>
                this.setValueInState('checked', event.target.value)
              }
              options={Constants.STATUS}
              title={'Checked'}
            />
            <Select
              value={Constants.STATUSES_OBJ[status] || ''}
              onChange={event =>
                this.setValueInState(
                  'status',
                  Object.keys(Constants.STATUSES_OBJ).find(
                    i => Constants.STATUSES_OBJ[i] === event.target.value
                  )
                )
              }
              options={Constants.STATUSES}
              title={'Status'}
            />
            <TextField
              value={URL || ''}
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
            <Button onClick={this.deeleteCV} text={'Delete'} />

            <Button onClick={() => this.updateCV(this.state)} text={'SAVE'} />
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
