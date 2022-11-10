export const addHoursToDate = (date: Date | null, hours: number) => {
  return date && new Date(date.getTime() + 3600000 * hours);
};
