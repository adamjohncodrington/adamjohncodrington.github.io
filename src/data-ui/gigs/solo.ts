import { MUSIC_EVENTS as DATA } from "data-raw";
import { mapMusicEventsToCards } from "./utils";

const solo: IMusicEvent[] = DATA.filter(
  ({ company }: IMusicEvent): boolean => company.length === 0
).map((musicEvent: IMusicEvent) => ({
  ...musicEvent,
  hideCompanySymbols: true
}));

export const SOLO: ICard[] = mapMusicEventsToCards(solo);
