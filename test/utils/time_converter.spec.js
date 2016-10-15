import convertTime from './../../src/utils/time_converter';

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
