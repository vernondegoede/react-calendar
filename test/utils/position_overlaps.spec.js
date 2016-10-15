import positionOverlaps from './../../src/utils/position_overlaps';

describe ('overlapping appointments', () => {
  it('should be positioned correctly', () => {
    let appointments = [
      {
        start_time: 300,
        end_time: 500,
        duration: ( 500 - 300 )
      },
      {
        start_time: 300,
        end_time: 500,
        duration: ( 500 - 300 )
      },
      {
        start_time: 450,
        end_time: 900,
        duration: ( 900 - 450 )
      }
    ];

    let positionedOverlaps = positionOverlaps(appointments);
    let mappedPositions = positionedOverlaps.map(i => i.position);
    let expectedPositions = [1, 2, 0];

    expect(mappedPositions).toEqual(expectedPositions);
  });
});
