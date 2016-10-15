export default (appointments = []) => {
  return appointments.map((appointment) => {
    if (!appointment.end_time || !appointment.start_time) {
      throw new ReferenceError(`Unable to calculate durations start and end times`);
    }

    if (appointment.start_time > appointment.end_time) {
      throw new RangeError('Events cannot end before they even started');
    }

    let duration = appointment.end_time - appointment.start_time;
    return ({
      ...appointment,
      duration
    });
  })
};
