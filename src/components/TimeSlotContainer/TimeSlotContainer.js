import React, { Component } from 'react';
import TimeSlotRow from './../TimeSlotRow/TimeSlotRow';
import { Container } from './styles';

export default class TimeSlots extends Component {
  render () {
    let timeSlotsContainer = [];
    for (let currentHour = 0; currentHour <= this.props.hours; currentHour++) {
      timeSlotsContainer.push(<TimeSlotRow key={currentHour} hour={currentHour} />);
    }

    return (
      <Container>
      {timeSlotsContainer}
      </Container>
    )
  }
}
