import dayJS from 'dayjs';

export const convertDate = (date: Date | string, format = 'DD/MM/YYYY HH:mm:ss', plusUserTimezone = true) => {
  if (!date) return null;

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (plusUserTimezone) {
    const userTimezone = new Date().getTimezoneOffset() / -60;

    parsedDate.setHours(parsedDate.getHours() + userTimezone);
  }

  return dayJS(parsedDate).format(format);
};

export const addUserTimeZoneHours = (date: Date) => {
  if (!date) return null;

  const userTimezone = new Date().getTimezoneOffset() / -60;

  date.setHours(date.getHours() + userTimezone);

  return date;
};

export const minusUserTimeZoneHours = (date: Date) => {
  if (!date) return null;

  const userTimezone = new Date().getTimezoneOffset() / -60;

  date.setHours(date.getHours() - userTimezone);

  return date;
};

export const convertDateForRequestModel = (date: Date) => {
  if (!date) return null;

  const convertedDate = new Date(date);

  return convertedDate.toISOString();
};

export const getDateTime = (date: Date): string => date.toTimeString().split(' ')[0];

export const getUserTzHour = (hour: number) => {
  const date = new Date();

  const userTimezone = date.getTimezoneOffset() / -60;

  date.setHours(hour + userTimezone);

  return date.getHours();
};

export const convertTimeToDate = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  const date = new Date();

  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  return date;
};

export const getNextDayOfWeek = (date: Date, dayOfWeek: number) => {
  const resultDate = new Date(date.getTime());

  const nextWeek = (7 + dayOfWeek - date.getDay()) % 7;

  resultDate.setDate(date.getDate() + (nextWeek || 7));

  return resultDate;
};

export const getNextMonthFirstDay = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 1);
