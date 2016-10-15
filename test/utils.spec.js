import React from 'react';
import convertTime from './../src/utils/time_converter';
import calculateDuration from './../src/utils/calculate_duration';

describe('time convertion', () => {
  it('converts minutes to hours correctly', () => {
    let times = [
      '15:30',
      '18:10',
      '00:00',
      '24:00'
    ];

    times = times.map(time => convertTime(time));

    expect(times).toEqual([
      930,
      1090,
      0,
      1440
    ]);
  });

  it ('should throw an error when no time is passed', () => {
    expect (() => {
      convertTime();
    }).toThrow();
  });
});

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
