export default (appointments = [], hoursInDay = 24) => {
  let hours = [];

  for (let hour = 0; hour < hoursInDay; hour++) {
    hours.push({
      hour,
      appointmentsInHour: [],
      itemsInRow: 0
    });
  }

  hours.forEach((singleHour) => {
    let hourInMinutes = ( singleHour.hour * 60 );
    let itemsPerHour = 0;
    appointments.forEach((appointment) => {
      appointment.overlappingAppointments = [];
      if (appointment.start_time <= hourInMinutes && appointment.end_time >= hourInMinutes) {
        itemsPerHour++;
      }
      appointment.overlappingItems = 0;
    });

    singleHour.appointmentsInHour = itemsPerHour;
  });

  hours.forEach((singleHour) => {
    let hourInMinutesOffset = ( singleHour.hour * 60 );

    appointments.forEach((appointment) => {
      if (appointment.start_time <= hourInMinutesOffset &&
        appointment.end_time >= hourInMinutesOffset &&
        singleHour.appointmentsInHour > appointment.overlappingItems) {
          appointment.overlappingItems = singleHour.appointmentsInHour;
        }
      });
    });

    return appointments;
  }
