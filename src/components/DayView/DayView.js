import React, { Component } from 'react';
import './AppointmentList.css';
import moment from 'moment';
var findWhere = require('lodash.findwhere');

const ROW_OFFSET = 50;

class AppointmentItem extends Component {
  getOverlaps (currentAppointment, allAppointments) {
    let currentStartTime = this.getMinutesOffset(currentAppointment.start_time);
    let currentEndTime = this.getMinutesOffset(currentAppointment.end_time);

    return allAppointments.filter((appointment) => {
      let startTime = this.getMinutesOffset(appointment.start_time);
      let endTime = this.getMinutesOffset(appointment.end_time);

      return (currentStartTime < endTime) && (startTime < currentEndTime);
    });
  }

  constructor (props) {
    super(props);

    this.state = {
      focussed: false
    }

    this.showInFront = this.showInFront.bind(this);
  }

  calculateHeight (startTime = '00:00', endTime = '00:00') {
    startTime = this.getMinutesOffset(startTime);
    endTime = this.getMinutesOffset(endTime);
    let difference = endTime - startTime;

    return ( difference / 60) * ROW_OFFSET;
  }

  getAlreadyPositionedOverlaps (overlaps) {
    return overlaps.filter((overlappingAppointment) => {
      return overlappingAppointment.id < this.props.appointment.id;
    });
  }

  calculateOffsetTop (time = '00:00') {
    let timeInMinutes = this.getMinutesOffset(time);
    let offsetTop = ( timeInMinutes / 60) * ROW_OFFSET;

    return offsetTop.toFixed(2);
  }

  getMinutesOffset (time = '00:00') {
    let startTime = moment.duration(time);
    return startTime.asMinutes();
  }

  showInFront () {
    this.setState({
      in_front: true
    });
  }

  calculateOffsetLeft (overlaps, width) {
    if (overlaps.length === 0) {
      return 0;
    }

    let positionedOverlappingComponents = this.getAlreadyPositionedOverlaps(overlaps);
    return ( positionedOverlappingComponents.length * width );
  }

  render () {
    let appointment = this.props.appointment;
    let overlaps =  this.getOverlaps(appointment, this.props.appointments);
    let isFocussed = this.state.focussed;

    let width = 100 / ( overlaps.length);
    let itemHeight = this.calculateHeight(appointment.start_time, appointment.end_time) + 'px';
    let innerStyle = {
      maxHeight: (isFocussed) ? 'auto' : itemHeight,
      minHeight: itemHeight,
    }
    let outerStyle = {
      ...innerStyle,
      top: this.calculateOffsetTop(appointment.start_time) + 'px',
      width: width + '%',
      left: this.calculateOffsetLeft(overlaps, width) + '%'
    }
    let className = 'appointment-item';

    if (isFocussed) {
      className += ' focussed';
    }

    return (
      <div className={className}
        style={ outerStyle }
        onMouseEnter={e => this.setState({ focussed: true })}
        onMouseLeave={e => this.setState({ focussed: false })}>
        <div className="inner" style={ innerStyle }>
          <strong>{ appointment.title }</strong>
          <p className="appointment-item--description">{ appointment.description }</p>
        </div>
      </div>
    )
  }
}

export default class AppointmentList extends Component {
  render () {
    let style = {
      top: ROW_OFFSET
    };
    // let hours = [];
    // let itemsInRow = 0;
    // let appointments = this.props.appointments;
    //
    // for (let hour = 0; hour < this.props.hours; hour++) {
    //   hours.push({
    //     hour,
    //     appointmentsInHour: [],
    //     itemsInRow
    //   });
    // }
    //
    // console.log('hours', hours);
    //
    // hours.forEach((item) => {
    //   let hourInMinutes = ( item.hour * 60 );
    //   let itemsPerHour = 0;
    //   appointments.forEach((appointment) => {
    //     if (appointment.start_time <= hourInMinutes && appointment.end_time >= hourInMinutes) {
    //       itemsPerHour++;
    //       item.appointmentsInHour.push(appointment.id);
    //     }
    //     appointment.overlappingItems = 0;
    //   });
    //
    //   item.itemsInRow = itemsPerHour;
    // });
    //
    // hours.forEach((item) => {
    //   let hourInMinutes = ( item.hour * 60 );
    //
    //   appointments.forEach((appointment) => {
    //     if (appointment.start_time <= hourInMinutes && appointment.end_time >= hourInMinutes) {
    //       if (item.itemsInRow > appointment.overlappingItems) {
    //         appointment.overlappingItems = item.itemsInRow;
    //       }
    //     }
    //   });
    // });
    //
    // hours.forEach((item) => {
    //   let shortestAppoinementID;
    //   let previousMatchingAppointment;
    //   item.appointmentsInHour.forEach((appointmentID) => {
    //     let matchingAppointment = findWhere(appointments, { id: appointmentID});
    //
    //     if(!previousMatchingAppointment) {
    //       shortestAppoinementID = matchingAppointment.id;
    //     }
    //
    //     if(previousMatchingAppointment) {
    //       if(previousMatchingAppointment.overlappingItems > matchingAppointment.overlappingItems){
    //         shortestAppoinementID = matchingAppointment.id;
    //       }
    //     }
    //     previousMatchingAppointment = matchingAppointment;
    //     console.log('matchingAppointment', matchingAppointment);
    //   });
    // });

    console.log('hours', hours);
    console.log('appointments', appointments);

    let rows = appointments.map(appointment => {
      return(
        <AppointmentItem key={appointment.id} appointment={appointment} {...this.props} />
      )
    });

    return (
      <div className="appointment-list" style={style}>{ rows }</div>
    )
  }
}
