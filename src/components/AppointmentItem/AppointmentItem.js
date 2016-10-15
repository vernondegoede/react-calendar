import React, { Component } from 'react';
import { Wrapper, Inner, Title, Description, DeleteButton, TimeSpan } from './styles';
import deleteIcon from './delete.svg';

export default class AppointmentItem extends Component {
  static propTypes = {
    removeAppointment: React.PropTypes.func.isRequired,
    appointment: React.PropTypes.object.isRequired,
    row_height: React.PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);
    this.removeAppointment = this.removeAppointment.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      focussed: false
    }
  }

  onMouseEnter () {
    this.setState({
      focussed: true
    });
  }

  onMouseLeave () {
    this.setState({
      focussed: false
    });
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

    let innerStyle = {
      height: this.calculateHeight(appointment.start_time, appointment.end_time)
    }

    let wrapperStyle = {
      ...innerStyle,
      top: this.calculateOffsetTop(appointment.start_time),
      width,
      left: ( width * appointment.position )
    }

    return (
      <Wrapper { ...wrapperStyle }
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        <Inner { ...innerStyle }>
          <header>
            <Title>
              { appointment.title }
            </Title>
            <TimeSpan focussed={this.state.focussed}>
              {appointment.start_time_hours} - {appointment.end_time_hours}
            </TimeSpan>
            <DeleteButton
              focussed={this.state.focussed}
              image={deleteIcon} onClick={this.removeAppointment} />
          </header>
          <Description>
            {appointment.description}
          </Description>
        </Inner>
      </Wrapper>
    )
  }
}
