import moment from 'moment';

export default (time) => {
  if (!time) {
    throw new Error('Unable to convert a non-existing variable');
  }

  return moment.duration(time, 'hours').asMinutes();
};
