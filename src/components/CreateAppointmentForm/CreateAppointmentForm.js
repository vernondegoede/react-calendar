import React, { Component } from 'react';
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
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm (e) {
    e.preventDefault();
    this.setState(this.props.appointment);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.props.appointment);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="appointment-form__inner">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title"
            required="required"
            className="form-control"
            onChange={ e => this.setState({title: e.currentTarget.value}) }
            value={ this.state.title } />
        </div>

        <div className="form-group">
          <label htmlFor="start_time_hours">Start time</label>
          <input type="time" name="start_time_hours"
            id="start_time_hours"
            required="required"
            className="form-control"
            onChange={ e => this.setState({start_time_hours: e.currentTarget.value}) }
            value={ this.state.start_time_hours } />
        </div>

        <div className="form-group">
          <label htmlFor="end_time_hours">End time</label>
          <input type="time" name="end_time_hours"
            id="end_time_hours"
            required="required"
            className="form-control"
            onChange={ e => this.setState({end_time_hours: e.currentTarget.value}) }
            value={ this.state.end_time_hours } />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description"
            className="form-control"
            required="required"
            onChange={ e => this.setState({description: e.currentTarget.value}) }
            value={ this.state.description } />
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
        <button type="reset" className="btn btn-secondary"
          onClick={this.resetForm}>Cancel</button>
      </form>
    )
  }
}
