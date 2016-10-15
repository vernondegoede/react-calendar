import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, TextArea, Button } from './styles';
import icon from './calendar.svg';

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
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">
            Title
          </Label>
          <Input type="text" id="title"
            required="required"
            onChange={ e => this.setState({title: e.currentTarget.value}) }
            value={ this.state.title } />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="start_time_hours">
            Start time
          </Label>
          <Input type="time"
            id="start_time_hours"
            required="required"
            icon={icon}
            onChange={ e => this.setState({start_time_hours: e.currentTarget.value}) }
            value={ this.state.start_time_hours } />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="end_time_hours">End time</Label>
          <Input type="time"
            icon={icon}
            id="end_time_hours"
            required="required"
            onChange={ e => this.setState({end_time_hours: e.currentTarget.value}) }
            value={ this.state.end_time_hours } />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea id="description"
            onChange={ e => this.setState({description: e.currentTarget.value}) }
            value={ this.state.description } />
        </FormGroup>

        <Button type="submit">
          Save
        </Button>
        <Button type="reset"
          onClick={this.resetForm}>
          Cancel
        </Button>
      </Form>
    )
  }
}
