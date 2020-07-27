import { MUSIC_EVENTS as DATA } from "data";

export const SOLO: Array<IMusicEvent> = DATA.filter(
  ({ company }: IMusicEvent): boolean => company.length === 0
).map((MusicEvent: IMusicEvent) => ({
  ...MusicEvent,
  hideCompanySymbols: true
}));
