import React, { Component } from 'react';
import TimeSlotRow from './../TimeSlotRow/TimeSlotRow';

export default class TimeSlots extends Component {
  render () {
    let timeSlotsContainer = [];
    for (let currentHour = 1; currentHour < this.props.hours; currentHour++) {
      timeSlotsContainer.push(<TimeSlotRow key={currentHour} hour={currentHour} />);
    }

    return (
      <div className='time-slots'>
      {timeSlotsContainer}
      </div>
    )
  }
}
