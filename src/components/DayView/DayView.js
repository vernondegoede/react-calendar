import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppointmentItem from './../AppointmentItem/AppointmentItem';
import getFirstAppointment from './../../utils/first_appointment';
import './AppointmentList.css';

export default class AppointmentList extends Component {
  componentDidMount () {
    this.ensureFirstAppointmentVisible();
  }

  ensureFirstAppointmentVisible () {
    if (!this.firstAppointmentRef) {
      return false;
    }

    ReactDOM.findDOMNode(this.firstAppointmentRef).scrollIntoView();
  }

  render () {
    let style = {
      top: this.props.row_height
    };
    let firstAppointment = getFirstAppointment(this.props.appointments);

    let rows = this.props.appointments.map((appointment) => {
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
