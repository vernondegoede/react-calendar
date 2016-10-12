export default (appointments) => {
  let startTimes = appointments.map(item => item.start_time);
  let firstStartTime = startTimes.reduce((a, b) => {
    return Math.min(a, b)
  }, Infinity);
  return appointments.find(item => item.start_time = firstStartTime);
}
