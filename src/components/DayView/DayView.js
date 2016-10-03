import React, { Component } from 'react';

class Appointment extends Component {
  render () {
    console.log('this.props', this.props);

    return (
      <div>
        <strong>{ this.props.appointment.title }</strong>
        <p>{ this.props.appointment.description }</p>
      </div>
    )
  }
}

export default class DayView extends Component {
  render () {
    let rows = [];
    this.props.appointments.forEach(appointment => {
      rows.push(<Appointment key={appointment.id} appointment={appointment} />)
    });

    return (
      <div className="todays-appointments">{ rows }</div>
    )
  }
}
