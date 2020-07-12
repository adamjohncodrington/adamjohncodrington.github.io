import { DAYS_OF_THE_WEEK, MONTHS } from "@constants";

export const getDateText = (date: Date): string => {
  const weekday: number = date.getDay();
  const day: number = date.getDate();
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  return `${DAYS_OF_THE_WEEK[weekday]} ${day} ${MONTHS[month]} ${year}`;
};

export const getDatesText = (dates: Array<Date>): string => {
  if (dates.length === 2)
    return `${getDateText(dates[0])} to ${getDateText(dates[1])}`;

  return getDateText(dates[0]);
};
