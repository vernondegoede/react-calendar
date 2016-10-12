import React, { Component } from 'react';
import moment from 'moment';
import './CreateAppointmentForm.css';

export default class extends Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    appointment: React.PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);

    this.state = this.props.appointment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();

    this.setState({
      start_time: moment.duration(this.state.start_time, 'hours').asMinutes(),
      end_time: moment.duration(this.state.end_time, 'hours').asMinutes()
    });

    this.props.onSubmit(this.state);
    this.setState(this.props.appointment);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="appointment-form__inner">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"
            onChange={ e => this.setState({title: e.currentTarget.value}) }
            value={ this.state.title } />
        </div>

        <div className="form-group">
          <label htmlFor="starttime">Start time</label>
          <input type="time" name="start_time" id="start_time"
            onChange={ e => this.setState({start_time: e.currentTarget.value}) }
            value={ this.state.start_time } />
        </div>

        <div className="form-group">
          <label htmlFor="end_time">End time</label>
          <input type="time" name="end_time" id="end_time"
            onChange={ e => this.setState({end_time: e.currentTarget.value}) }
            value={ this.state.end_time } />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description"
            onChange={ e => this.setState({description: e.currentTarget.value}) }
            value={ this.state.description } />
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <button type="reset" className="btn btn-secondary">Cancel</button>
      </form>
    )
  }
}
