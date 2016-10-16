import React, { Component } from 'react';
import moment from 'moment';
import { TimeSlot, Hour } from './styles';

export default class TimeSlotRow extends Component {
  static propTypes = {
    hour: React.PropTypes.number.isRequired
  }

  render () {
    let hour = moment({
      hour: this.props.hour
    });

    return (
      <TimeSlot>
        <Hour>
          {hour.format('HH')}
        </Hour>
      </TimeSlot>
    )
  }
}
