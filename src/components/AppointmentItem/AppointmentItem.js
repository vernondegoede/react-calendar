import React, { Component } from 'react';
import './AppointmentItem.css';

export default class AppointmentItem extends Component {
  calculateHeight (startTime = '00:00', endTime = '00:00') {
    let difference = endTime - startTime;
    return ( difference / 60) * this.props.row_height;
  }

  calculateOffsetTop (time = '00:00') {
    let timeInMinutes = this.props.appointment.start_time;
    let offsetTop = ( timeInMinutes / 60) * this.props.row_height;
    return offsetTop.toFixed(2);
  }

  render () {
    let appointment = this.props.appointment;
    let overlaps =  appointment.overlappingItems;

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
          <header>
            <strong className="title">
              { appointment.title }
            </strong>
            <div className="remove-button">

            </div>
          </header>
          <p className="appointment-item--description">{ appointment.description }</p>
        </div>
      </div>
    )
  }
}
