import React, { Component } from 'react';
import './AppointmentList.css';

class AppointmentItem extends Component {
  render () {
    return (
      <div className="appointment-item">
        <strong>{ this.props.appointment.title }</strong>
        <p className="appointment-item--description">{ this.props.appointment.description }</p>
      </div>
    )
  }
}

export default class AppointmentList extends Component {
  render () {
    let rows = [];
    this.props.appointments.forEach(appointment => {
      rows.push(<AppointmentItem key={appointment.id} appointment={appointment} />)
    });

    return (
      <div className="appointment-list">{ rows }</div>
    )
  }
}
