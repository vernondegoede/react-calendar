import firstAppointment from './../../src/utils/first_appointment';

describe('first appointments', () => {
  it('should be able to find first appointment of the day', () => {
    let appointments = [
      {
        start_time: 300,
        end_time: 500
      },
      {
        start_time: 1200,
        end_time: 600
      },
      {
        start_time: 150,
        end_time: 800
      }
    ];

    expect(firstAppointment(appointments)).toEqual({
      start_time: 150,
      end_time: 800
    });
  });
});
