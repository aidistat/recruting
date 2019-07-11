import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../../Calendar/Calendar';
import Button from '../../Button/Button';
import reportThunk from '../../../redux/report/report-thunk';

class SelectDates extends Component {
  state = {};
  setDatesInState = (id, event) => {
    this.setState({ [id]: event });
  };
  generateReport = () => {
    this.props.generateReport(this.state);
  };
  render() {
    return (
      <div className="DatesFromReport">
        <span>Период:</span>
        <Calendar
          id="startDate"
          label={''}
          onChange={event =>
            this.setDatesInState('startDate', event.target.value)
          }
        />
        <span> - </span>
        <Calendar
          id="endBate"
          label={''}
          onChange={event =>
            this.setDatesInState('endDate', event.target.value)
          }
        />
        <Button text="generate" onClick={this.generateReport} />
      </div>
    );
  }
}

const mapDispatchToProps = { generateReport: reportThunk };

export default connect(
  null,
  mapDispatchToProps
)(SelectDates);
