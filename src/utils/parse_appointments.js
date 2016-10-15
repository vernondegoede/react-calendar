import mapAppointmentsDuration from './calculate_duration';
import setHoursToMinutes from './time_converter';
import mapOverlappingAppointments from './position_overlaps';

const mapHoursToMinutes = (appointment) => {
  appointment.start_time = setHoursToMinutes(appointment.start_time_hours);
  appointment.end_time = setHoursToMinutes(appointment.end_time_hours);

  return appointment;
};

const calculateOverlappingItems = (hours, appointments) => {
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

  return appointments;
}

const prepareHourArray = (hoursInDay) => {
  let hours = [];
  for (let hour = 0; hour < hoursInDay; hour++) {
    hours.push({
      hour,
      appointmentsInHour: [],
      itemsInRow: 0
    });
  }
  return hours;
}

const getOverlappingAppointments = (hours, appointments) => {
  hours.forEach(singleHour => {
    let hourInMinutesOffset = ( singleHour.hour * 60 );

    appointments.forEach(appointment => {
      if
      (appointment.start_time <= hourInMinutesOffset &&
        appointment.end_time >= hourInMinutesOffset &&
        singleHour.appointmentsInHour > appointment.overlappingItems
      ) {
        appointment.overlappingItems = singleHour.appointmentsInHour;
      }
    });
  });

  return appointments;
}

export default (appointments = [], hoursInDay = 24) => {
  let hours = prepareHourArray(hoursInDay);

  appointments.forEach(appointment => mapHoursToMinutes(appointment));

  appointments.map(appointment => {
    appointments = calculateOverlappingItems(hours, appointments)
    appointments = getOverlappingAppointments(hours, appointments);
    appointments = mapAppointmentsDuration(appointments);
    appointments = mapOverlappingAppointments(appointments);

    return appointments;
  });

  return appointments;
}
