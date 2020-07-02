import { DAYS_OF_THE_WEEK, MONTHS } from "constant-objects";

export const dateToString = (date: Date): string => {
  const weekday: number = date.getDay();
  const day: number = date.getDate();
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  return `${DAYS_OF_THE_WEEK[weekday]} ${day} ${MONTHS[month]} ${year}`;
};

export const datesToString = (dates: Array<Date>): string => {
  if (dates.length === 2)
    return `${dateToString(dates[0])} to ${dateToString(dates[1])}`;

  const errorText: string =
    "You passed an incorrect number dates to the datesArrayToString function";
  alert(errorText);
  return errorText;
};
