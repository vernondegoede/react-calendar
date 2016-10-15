import calculateDuration from './../../src/utils/calculate_duration';

describe('calculating event durations', () => {
  it('should calculate correct durations', () => {
    let appointments = [
      {
        start_time: 300,
        end_time: 500
      },
      {
        start_time: 600,
        end_time: 1200
      }
    ];

    let appointmentsWithDuration = [
      {
        start_time: 300,
        end_time: 500,
        duration: 200
      },
      {
        start_time: 600,
        end_time: 1200,
        duration: 600
      }
    ];

    expect(calculateDuration(appointments)).toEqual(appointmentsWithDuration);
  });

  it('should throw an error when start_time > end_time', () => {
    let appointments = [
      {
        start_time: 300,
        end_time: 500
      },
      {
        start_time: 1200,
        end_time: 600
      }
    ];

    expect(() => {
      calculateDuration(appointments)
    }).toThrowError(RangeError);
  });

  it ('should throw an error when no start_time or end_time is passed', () => {
    expect(() => {
      calculateDuration([{}])
    }).toThrowError(ReferenceError);
  });
});
