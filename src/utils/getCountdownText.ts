import { daysToGo } from "./daysToGo";

export const getCountdownText = (date: Date): string | undefined => {
  const DAYS_TO_GO: number = daysToGo(date);

  if (DAYS_TO_GO < 1) return undefined;

  if (DAYS_TO_GO === 0) return "TODAY";

  if (DAYS_TO_GO === 1) return daysToGo + " DAY TO GO";

  return DAYS_TO_GO + " DAYS TO GO";
};
