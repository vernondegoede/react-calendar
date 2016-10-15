import React, { Component } from 'react';
import { Wrapper, Inner, Title, Description, DeleteButton } from './styles';
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
      height: this.calculateHeight(appointment.start_time, appointment.end_time) + 'px'
    }

    let wrapperStyle = {
      ...innerStyle,
      top: this.calculateOffsetTop(appointment.start_time) + 'px',
      width: width + '%',
      left: ( width * appointment.position ) + '%'
    }

    return (
      <Wrapper { ...wrapperStyle }>
        <Inner { ...innerStyle }>
          <header>
            <Title>
              { appointment.title }
            </Title>
            <DeleteButton
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
