import React, { Component } from 'react';
import './App.css';
import Button from "./Components/Button/button"
import Header from "./Components/Header/Header"
import Select from "./Components/Select/Select"
import Calendar from "./Components/Calendar/calendar"
import Service from "./Services/service"

export default class App extends Component {
  render() {
      let statuses = ["Checked", "Not Checked"];
      let tech = ["JavaScript", "Python", "Java", "Project Manager", "QA Engineer", "C#"];
    return (
        <div className="App">
          <Header />
          <span>Profile</span>
          <Select options={tech}/>
          <span>from</span>
          <Calendar/>
          <span>to</span>
          <Calendar/>
          <span>Status</span>
          <Select options={statuses}  />
      </div>
    );
  }
}
