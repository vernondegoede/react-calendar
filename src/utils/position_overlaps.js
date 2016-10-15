/**
Calculate the position for overlapping appointments.
If appointment has no overlaps, default position = 0.
If appointment has appointments which start and end on exactly the same time, we should determine which appointment should have a higher position.
*/
export default (appointments) => {
  let temp_id = 0;

  appointments.forEach(appointment => appointment.temp_id = temp_id++);

  appointments.forEach(currentAppointment => {
    currentAppointment.position = -1;
    currentAppointment.duplicates = [];

    appointments.forEach(appointment => {
      let isOverlappingAppointment = (
        currentAppointment.start_time < appointment.end_time &&
        appointment.start_time < currentAppointment.end_time &&
        appointment.duration >= currentAppointment.duration
      )

      let isDuplicateAppointment = (
        currentAppointment.start_time === appointment.start_time &&
        appointment.end_time === currentAppointment.end_time &&
        appointment.duration === currentAppointment.duration &&
        appointment.temp_id !==
        currentAppointment.temp_id
      )

      if (isDuplicateAppointment) {
        currentAppointment.duplicates.push(appointment.temp_id);

        if (currentAppointment.duplicates.indexOf(currentAppointment.temp_id) === -1) {
          currentAppointment.duplicates.push(currentAppointment.temp_id);
          currentAppointment.duplicates.sort(); // Make sure duplicates array is equal for each duplicate
        }

      }else if (isOverlappingAppointment) {
        currentAppointment.position++;
      }
    });
  });

  appointments.forEach(appointment => {
    if (appointment.duplicates.length > 0) {
      let indexOfID = appointment.duplicates.indexOf(appointment.temp_id);
      appointment.position += indexOfID;
    }
  });

  appointments.forEach((appointment) => {
    delete appointment.temp_id;
    delete appointment.duplicates;
  });

  return appointments;
};
