import { DAYS_OF_THE_WEEK, MONTHS } from "../../constants";

export const getDisplayDateText = (dates: Array<Date>): string => {
  const stringifyDate = (date: Date): string => {
    const weekday: number = date.getDay();
    const day: number = date.getDate();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();

    return `${DAYS_OF_THE_WEEK[weekday]} ${day} ${MONTHS[month]} ${year}`;
  };

  return dates.length > 1
    ? `${stringifyDate(dates[0])} to ${stringifyDate(dates[1])}`
    : stringifyDate(dates[0]);
};
