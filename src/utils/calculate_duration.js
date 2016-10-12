export default (appointments) => {
  appointments.map((appointment) => {
    let duration = appointment.end_time - appointment.start_time;
    return ({
      ...appointment,
      duration
    });
  })
};
