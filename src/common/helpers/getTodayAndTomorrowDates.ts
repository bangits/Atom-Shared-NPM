export const getTodayAndTomorrowDates = (): [Date, Date] => {
  const today = new Date();

  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  const tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);

  return [today, tomorrow];
};
