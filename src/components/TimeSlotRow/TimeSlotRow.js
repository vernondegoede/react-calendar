import React, { Component } from 'react';
import moment from 'moment';

import './TimeSlotRow.css';

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
        <span className='time-slot--hour'>
          {hour.format('HH:mm')}
        </span>
      </div>
    )
  }
}
