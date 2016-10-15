import React, { Component } from 'react';
import './AppointmentItem.css';

export default class AppointmentItem extends Component {
  static propTypes = {
    removeAppointment: React.PropTypes.func.isRequired,
    appointment: React.PropTypes.object,
    row_height: React.PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);
    this.removeAppointment = this.removeAppointment.bind(this);
  }

  calculateHeight (startTime = '00:00', endTime = '00:00') {
    let { duration } = this.props.appointment;
    return ( duration / 60) * this.props.row_height;
  }

  calculateOffsetTop (time = '00:00') {
    let timeInMinutes = this.props.appointment.start_time;
    let offsetTop = ( timeInMinutes / 60) * this.props.row_height;
    return offsetTop.toFixed(2);
  }

  removeAppointment () {
    this.props.removeAppointment(this.props.appointment.id);
  }

  render () {
    let { appointment } = this.props;
    let { overlappingItems } = appointment;

    let width = 100 / overlappingItems;
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
            <div className="remove-button" onClick={this.removeAppointment}></div>
          </header>
          <p className="appointment-item--description">{ appointment.description }</p>
        </div>
      </div>
    )
  }
}
