import { DAYS_OF_THE_WEEK, MONTHS } from "@constants";

export const getDateText = (
  date: Date,
  showYear: boolean = true,
  showMonth: boolean = true
): string => {
  const weekday: number = date.getDay();
  const day: number = date.getDate();
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  const weekdayString: string = DAYS_OF_THE_WEEK[weekday];
  const monthString: string = MONTHS[month];

  const weekdayAndDayString: string = weekdayString + " " + day;

  return showYear
    ? weekdayAndDayString + " " + monthString + " " + year
    : showMonth
    ? weekdayAndDayString + " " + monthString
    : weekdayAndDayString;
};

export const getDatesText = (dates: Array<Date>): string => {
  if (dates.length === 1) return getDateText(dates[0]);

  if (dates.length === 2) {
    return getDateTextFor2Dates(dates[0], dates[1]);
  }

  const errorText: string =
    "ERROR: incorrect number of dates passed to `getDatesText` function";
  alert(errorText);
  return errorText;
};

const getDateTextFor2Dates = (firstDate: Date, secondDate: Date): string => {
  const showYearInFirstDateString: boolean =
    firstDate.getFullYear() !== secondDate.getFullYear();

  const showMonthInFirstDateString: boolean =
    firstDate.getMonth() !== secondDate.getMonth();

  const firstDateString: string = getDateText(
    firstDate,
    showYearInFirstDateString,
    showMonthInFirstDateString
  );

  return firstDateString + " - " + getDateText(secondDate);
};
