import { DAYS_OF_THE_WEEK, MONTHS } from "CONSTANTS";

export const getCountdownText = (daysToGo: number): string => {
  if (daysToGo === 0) return "TODAY";
  if (daysToGo === 1) return daysToGo + " DAY TO GO";
  return daysToGo + " DAYS TO GO";
};

export const daysToGo = (dates: Array<Date>): number => {
  const secondsInADay: number = 24 * 60 * 60;
  const dateDifference: number = dates[0].valueOf() - new Date().valueOf();

  return Math.ceil(dateDifference / (secondsInADay * 1000));
};

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
