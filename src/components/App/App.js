import React, { Component } from 'react';
import appointments from './../../data';
import TimeSlotContainer from './../TimeSlotContainer/TimeSlotContainer';
import DayView from './../DayView/DayView';
import CreateAppointmentForm from './../CreateAppointmentForm/CreateAppointmentForm';
import Header from './../Header/Header';
import getCurrentDate from './../../utils/current_date';

import './App.css';

const HOURS_IN_DAY = 25;

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      appointments,
      date: getCurrentDate(),
      newAppointment: {
        title: '',
        start_time: '',
        end_time: '',
        description: ''
      }
    };
    this.addAppointment = this.addAppointment.bind(this);
  }

  addAppointment (newAppointment) {
    let lastAppointment = [...this.state.appointments].pop();
    newAppointment.id = ( lastAppointment.id + 1);

    this.setState({
      appointments: [
        ...this.state.appointments,
        newAppointment
      ]
    });
  }

  render () {
    return (
      <div className="calendar">
        <Header />
        <div className="wrapper clearfix">
          <div className="today calendar--appointments">
            <div className="today--header">
              <h2 className="today--date">{ this.state.date }</h2>
            </div>
            <div className="today--container">
              <TimeSlotContainer hours={HOURS_IN_DAY} />
              <DayView row_height={50} hours={HOURS_IN_DAY} appointments={this.state.appointments} />
            </div>
          </div>
          <div className="calendar--new-appointment appointment-form">
            <CreateAppointmentForm ref="" onSubmit={this.addAppointment}
              appointment={this.state.newAppointment} />
          </div>
        </div>
      </div>
    )
  }
}
