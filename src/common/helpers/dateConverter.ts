import dayJS from 'dayjs';

export const convertDate = (date: string, format = 'DD/MM/YYYY HH:mm:ss') => {
  const parsedDate = new Date(date);

  return dayJS(parsedDate).format(format);
};

export const convertDateForRequestModel = (date: Date) => {
  const convertedDate = new Date(date);

  return convertedDate.toISOString();
};
