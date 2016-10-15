import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './AppointmentList.css';
import AppointmentItem from './../AppointmentItem/AppointmentItem';

import parseAppointments from './../../utils/parse_appointments';
import getFirstAppointment from './../../utils/first_appointment';

export default class AppointmentList extends Component {
  componentDidMount () {
    this.ensureFirstAppointmentVisible();
  }

  ensureFirstAppointmentVisible () {
    ReactDOM.findDOMNode(this.firstAppointmentRef).scrollIntoView();
  }

  render () {
    let style = {
      top: this.props.row_height
    };
    let appointments = parseAppointments(this.props.appointments, this.props.hours);
    let firstAppointment = getFirstAppointment(this.props.appointments);

    let rows = appointments.map((appointment) => {
      let isFirstAppointment = ( appointment.id === firstAppointment.id );

      return(<AppointmentItem key={appointment.id}
        // Reference to the first appointment in the list
        ref={ isFirstAppointment ? ( (ref) => this.firstAppointmentRef = ref ) : false }
        appointment={appointment} {...this.props} />);
      });

      return (
        <div className="appointment-list" style={style}>{ rows }</div>
      )
    }
  }
