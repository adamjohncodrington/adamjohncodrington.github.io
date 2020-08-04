import { DATES } from "@constants";

const { DAYS_OF_THE_WEEK, MONTHS } = DATES;

interface IOptions {
  hideDay?: boolean;
  hideMonth?: boolean;
  hideYear?: boolean;
}

export const getDateText = (date: Date, options?: IOptions): string => {
  // const hideDay: boolean = !!(options && options.hideDay);
  const hideMonth: boolean = !!(options && options.hideMonth);
  const hideYear: boolean = !!(options && options.hideYear);

  const weekday: number = date.getDay();
  const weekdayString: string = DAYS_OF_THE_WEEK[weekday];
  const day: number = date.getDate();
  const weekdayAndDayString: string = weekdayString + " " + day;
  const month: number = date.getMonth();
  const monthString: string = MONTHS[month];
  const year: number = date.getFullYear();

  return hideMonth
    ? weekdayAndDayString
    : hideYear
    ? weekdayAndDayString + " " + monthString
    : weekdayAndDayString + " " + monthString + " " + year;
};

export const getDatesText = (
  dates: Array<Date>,
  options?: IOptions
): string => {
  if (dates.length === 1) return getDateText(dates[0], options);

  return getDateTextFor2Dates(dates[0], dates[dates.length - 1]);
};

const getDateTextFor2Dates = (firstDate: Date, secondDate: Date): string => {
  return (
    getDateText(firstDate, {
      hideMonth: firstDate.getMonth() === secondDate.getMonth(),
      hideYear: firstDate.getFullYear() === secondDate.getFullYear()
    }) +
    " - " +
    getDateText(secondDate)
  );
};
