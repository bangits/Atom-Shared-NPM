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

export const convertDateForRequestModel = (date: Date) => {
  if (!date) return null;

  const convertedDate = new Date(date);

  return convertedDate.toISOString();
};
