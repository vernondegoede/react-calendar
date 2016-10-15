import mapAppointmentsDuration from './calculate_duration';

const mapOverlappingAppointments = appointments => {
  appointments.forEach(currentAppointment => {
    currentAppointment.position = -1;

    console.log('currentAppointment', currentAppointment);

    appointments.forEach(appointment => {
      if (currentAppointment.start_time < appointment.end_time &&
        appointment.start_time < currentAppointment.end_time &&
        appointment.duration >= currentAppointment.duration)
        {
          currentAppointment.position++;
        }
      });
    });

    return appointments;
  };

  export default (appointments = [], hoursInDay = 24) => {
    let hours = [];

    for (let hour = 0; hour < hoursInDay; hour++) {
      hours.push({
        hour,
        appointmentsInHour: [],
        itemsInRow: 0
      });
    }

    hours.forEach(singleHour => {
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

    hours.forEach(singleHour => {
      let hourInMinutesOffset = ( singleHour.hour * 60 );

      appointments.forEach(appointment => {
        if (appointment.start_time <= hourInMinutesOffset &&
          appointment.end_time >= hourInMinutesOffset &&
          singleHour.appointmentsInHour > appointment.overlappingItems) {
            appointment.overlappingItems = singleHour.appointmentsInHour;
          }
        });
      });

      appointments = mapAppointmentsDuration(appointments);
      appointments = mapOverlappingAppointments(appointments);

      return appointments;
    }
