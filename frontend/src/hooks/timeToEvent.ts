import dayjs from 'dayjs';

const timeToEvent = (date: string): number => {
  const currentDate = dayjs();
  const targetDate = dayjs(date);
  const duration = dayjs(targetDate).diff(currentDate, 'days');
  if (duration < 0) {
    return 365 - Math.abs(duration);
  }
  return duration;
};

export default timeToEvent;
