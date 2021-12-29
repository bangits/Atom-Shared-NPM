import dayJS from 'dayjs';

export const convertDate = (date: Date | string, format = 'MM/DD/YYYY HH:mm:ss', plusUserTimezone = true) => {
  if (!date) return null;

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (plusUserTimezone) {
    const userTimezone = new Date().getTimezoneOffset() / -60;

    parsedDate.setHours(parsedDate.getHours() + userTimezone);
  }

  return dayJS(parsedDate).format(format);
};

export const convertDateForRequestModel = (date: Date) => {
  if (!date) return null;

  const convertedDate = new Date(date);

  return convertedDate.toISOString();
};
