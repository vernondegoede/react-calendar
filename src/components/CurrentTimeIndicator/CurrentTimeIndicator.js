import React, { Component } from 'react';
import { Line, Wrapper, Time } from './styles';
import moment from 'moment';

export default class CurrentTimeIndicator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      passed_minutes: 0,
      time: ''
    }
  }

  componentDidMount () {
    this.setTime();
    this.timer = setInterval(this.setTime.bind(this), 6000);
  }

  componentWillUnmount () {
    this.clearInterval(this.timer);
  }

  setTime () {
    const currentTime = moment();
    const midnightTime = currentTime.clone().startOf('day');
    const passedMinutes = currentTime.diff(midnightTime, 'minutes');
    const time = currentTime.format('HH:mm');

    this.setState({
      passed_minutes: passedMinutes,
      time
    });
  }

  render () {
    return (
      <Wrapper inMinutes={this.state.passed_minutes} {...this.props}>
        <Time>
          {this.state.time}
        </Time>
        <Line />
      </Wrapper>
    )
  }
}
