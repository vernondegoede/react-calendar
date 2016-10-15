import React, { Component } from 'react';
import defaultAppointments from './../../data';
import TimeSlotContainer from './../TimeSlotContainer/TimeSlotContainer';
import DayView from './../DayView/DayView';
import CreateAppointmentForm from './../CreateAppointmentForm/CreateAppointmentForm';
import Header from './../Header/Header';
import currentDate from './../../utils/current_date';
import parseAppointments from './../../utils/parse_appointments';
import { loadState, saveState } from './../../utils/persistence';
import './App.css';
const HOURS_IN_DAY = 24;

export default class App extends Component {
  constructor (props) {
    super(props);

    let appointments = [];
    let storedState = loadState();

    if (!storedState) {
      appointments = defaultAppointments;
    }else{
      appointments = storedState.appointments;
    }

    this.state = {
      appointments,
      date: currentDate(),
      newAppointment: {
        title: '',
        start_time: 0,
        end_time: 0,
        start_time_hours: '',
        end_time_hours: '',
        description: ''
      }
    };

    this.addAppointment = this.addAppointment.bind(this);
    this.removeAppointment = this.removeAppointment.bind(this);
  }

  addAppointment (newAppointment) {
    let lastAppointment = [...this.state.appointments].pop();
    let newAppointmentID = 1;

    if (this.state.appointments.length > 0) {
      newAppointmentID = lastAppointment.id + 1;
    }

    newAppointment.id = newAppointmentID;

    this.setState({
      appointments: [
        ...this.state.appointments,
        newAppointment
      ]
    }, () => {
      saveState(this.state); // setState callback
    })
  }

  removeAppointment (appointmentID) {
    this.setState({
      appointments: this.state.appointments.filter(appointment => appointment.id !== appointmentID)
    }, () => {
      saveState(this.state); // setState callback
    });
  }

  render () {
    let appointments = parseAppointments(this.state.appointments, HOURS_IN_DAY);

    return (
      <div className="calendar">
        <Header />
        <div className="wrapper clearfix">
          <div className="today calendar--appointments">
            <div className="today--header">
              <h2 className="today--date">{this.state.date}</h2>
            </div>
            <div className="today--container">
              <TimeSlotContainer hours={HOURS_IN_DAY} />
              <DayView
                row_height={50}
                removeAppointment={this.removeAppointment}
                appointments={appointments} />
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
