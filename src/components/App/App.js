import React, { Component } from 'react';
import defaultAppointments from './../../data';
import TimeSlotContainer from './../TimeSlotContainer/TimeSlotContainer';
import DayView from './../DayView/DayView';
import CreateAppointmentForm from './../CreateAppointmentForm/CreateAppointmentForm';
import Header from './../Header/Header';
import currentDate from './../../utils/current_date';
import parseAppointments from './../../utils/parse_appointments';
import { loadState, saveState } from './../../utils/persistence';

import './global_styles';
import { CalendarWrapper, Wrapper, TodayView, TodaysDate, DateHeader, TodayContainer, CalendarSidebar } from './styles';

const HOURS_IN_DAY = 24;
const ROW_HEIGHT = 50;

export default class App extends Component {
  constructor (props) {
    super(props);

    const appointments = this.getInitialAppointments();

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

  getInitialAppointments () {
    // Determine wheter we should load initial component state or load state from localStorage
    let storedState = loadState();

    if (!storedState) {
      return defaultAppointments;
    }
    return storedState.appointments;
  }

  addAppointment (newAppointment) {
    let lastAppointment = [...this.state.appointments].pop();
    let newAppointmentID = 1; // Default

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
      <CalendarWrapper>
        <Header />
        <Wrapper>
          <TodayView>
            <TodaysDate>
              <DateHeader>{this.state.date}</DateHeader>
            </TodaysDate>
            <TodayContainer>
              <TimeSlotContainer hours={HOURS_IN_DAY} />
              <DayView
                row_height={ROW_HEIGHT}
                removeAppointment={this.removeAppointment}
                appointments={appointments} />
            </TodayContainer>
          </TodayView>
          <CalendarSidebar>
            <CreateAppointmentForm ref="" onSubmit={this.addAppointment}
              appointment={this.state.newAppointment} />
          </CalendarSidebar>
        </Wrapper>
      </CalendarWrapper>
    )
  }
}
