import React, { Component } from 'react';
import dummyAppointments from './../../data';
import TimeSlotContainer from './../TimeSlotContainer/TimeSlotContainer';
import DayView from './../DayView/DayView';
import CreateAppointmentForm from './../CreateAppointmentForm/CreateAppointmentForm';
import Header from './../Header/Header';

import './App.css';

let appointments = dummyAppointments;

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      appointments
    };
  }

  render () {
    return (
      <div className="calendar">
        <Header />
        <div className="wrapper clearfix">
          <div className="today calendar--appointments">
            <div className="today--header">
              <h2 className="today--date">1 augustus 2016</h2>
            </div>
            <div className="today--container">
              <TimeSlotContainer hours={24} />
              <DayView appointments={this.state.appointments} />
            </div>
          </div>
          <div className="calendar--new-appointment appointment-form">
            <CreateAppointmentForm />
          </div>
        </div>
      </div>
    )
  }
}
