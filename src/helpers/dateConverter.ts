export const convertDateToISO = (date) => {
  const convertedDate = new Date(date);
  return convertedDate.toISOString();
};
