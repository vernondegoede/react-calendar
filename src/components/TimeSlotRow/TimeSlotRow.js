import React, { Component } from 'react';
import moment from 'moment';

export default class TimeSlotRow extends Component {
  static propTypes = {
    hour: React.PropTypes.number.isRequired
  }

  render () {
    let hour = moment({
      hour: this.props.hour
    });

    return (
      <div className='time-slot'>
      {hour.format('HH:mm')}
      </div>
    )
  }
}
