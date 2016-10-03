import React, { Component } from 'react';
import dummyAppointments from './../../data';
import TimeSlotsContainer from './../TimeSlotsContainer/TimeSlotsContainer';
import DayView from './../DayView/DayView';
import CreateAppointment from './../CreateAppointment/CreateAppointment';

export default class App extends Component {
  render () {
    return (
      <div className="calendar-container">
        <h1>Todays appointments</h1>
        <TimeSlotsContainer hours={24} />
        <DayView appointments={dummyAppointments} />
        <CreateAppointment />
      </div>
    )
  }
}
