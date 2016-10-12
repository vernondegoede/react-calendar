import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './AppointmentList.css';
import moment from 'moment';

import parseAppointments from './../../utils/parse_appointments';
import getFirstAppointment from './../../utils/first_appointment';

const ROW_OFFSET = 50;

class AppointmentItem extends Component {
  getOverlaps (currentAppointment, allAppointments) {
    let currentStartTime = currentAppointment.start_time;
    let currentEndTime = currentAppointment.end_time;

    return allAppointments.filter((appointment) => {
      let startTime = appointment.start_time;
      let endTime = appointment.end_time;

      return (currentStartTime < endTime) && (startTime < currentEndTime);
    });
  }

  calculateHeight (startTime = '00:00', endTime = '00:00') {
    let difference = endTime - startTime;
    return ( difference / 60) * ROW_OFFSET;
  }

  getAlreadyPositionedOverlaps (overlaps) {
    return overlaps.filter((overlappingAppointment) => {
      return overlappingAppointment.id < this.props.appointment.id;
    });
  }

  calculateOffsetTop (time = '00:00') {
    let timeInMinutes = this.props.appointment.start_time;
    let offsetTop = ( timeInMinutes / 60) * ROW_OFFSET;
    return offsetTop.toFixed(2);
  }

  getMinutesOffset (time = '00:00') {
    let startTime = moment.duration(time);
    return startTime.asMinutes();
  }

  render () {
    let appointment = this.props.appointment;
    let overlaps =  appointment.overlappingItems;

    console.log('appointment', appointment);

    let width = 100 / overlaps;
    let itemHeight = this.calculateHeight(appointment.start_time, appointment.end_time) + 'px';

    let left = ( width * appointment.position );

    let innerStyle = {
      height: itemHeight
    }
    let outerStyle = {
      ...innerStyle,
      top: this.calculateOffsetTop(appointment.start_time) + 'px',
      width: width + '%',
      left: left + '%'
    }

    return (
      <div className='appointment-item'
        style={ outerStyle }>
        <div className="inner" style={ innerStyle }>
          <strong>{ appointment.title }</strong>
          <p className="appointment-item--description">{ appointment.description }</p>
        </div>
      </div>
    )
  }
}

export default class AppointmentList extends Component {
  componentDidMount () {
    this.ensureFirstAppointmentVisible();
  }

  ensureFirstAppointmentVisible () {
    ReactDOM.findDOMNode(this.firstAppointmentRef).scrollIntoView();
  }

  render () {
    let style = {
      top: ROW_OFFSET
    };
    let appointments = parseAppointments(this.props.appointments, this.props.hours);
    let firstAppointment = getFirstAppointment(this.props.appointments);

    console.log('firstAppointment', firstAppointment);

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
