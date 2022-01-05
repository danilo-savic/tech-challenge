export const getMonthString = (date: Date | string | number) => {
  const monthString = (new Date(date).getMonth() + 1)
    .toString()
    .padStart(2, '0');
  return `${new Date(date).getFullYear()}-${monthString}`;
};
