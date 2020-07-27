import { MUSIC_EVENTS as DATA } from "data-raw";

export const SOLO: Array<IMusicEvent> = DATA.filter(
  ({ company }: IMusicEvent): boolean => company.length === 0
).map((musicEvent: IMusicEvent) => ({
  ...musicEvent,
  hideCompanySymbols: true
}));
