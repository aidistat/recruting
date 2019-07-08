import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '../Button/Button';
import TextField from '@material-ui/core/TextField';
import './newVacancy.css';
import * as Services from '../../Services/basicServices';
import * as Constants from '../../Constants/constants';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default class AlertDialog extends Component {
  state = {
    open: false,
    position: ''
  };

  constructor(props) {
    super(props);
    this.notificationDOMRef = React.createRef();
  }

  addNotificationError = () => {
    this.notificationDOMRef.current.addNotification({
      title: " Error ",
      message: 'Vacancy was not added!',
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  };

  addNotificationSuccess = () => {
    this.notificationDOMRef.current.addNotification({
      title: " Success ",
      message: 'Vacancy was added successfully!',
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true }
    });
  };

  addVacancy = async () => {
      let response = await Services.fetchJsonPost(
          Constants.URL_POSITION, JSON.stringify({name: this.state.position})
      );
      if(response.status === 200) {
        this.addNotificationSuccess();
      } else {
        this.addNotificationError();
      }
    };


  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  vacancy = e => {
    this.setState({
      position: e.target.value
    });
  };

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
          <ReactNotification ref={this.notificationDOMRef} />
          <h1>Add new vacancy</h1>
          <TextField
            id="standard-name"
            label="Name"
            margin="normal"
            onChange={e => this.vacancy(e)}
          />
          <Button text="ADD" onClick={() => this.addVacancy()} />
          <Button text="Cancel" onClick={this.handleClose} />
        </Dialog>
      </div>
    );
  }
}
