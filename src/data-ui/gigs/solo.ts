import { MUSIC_EVENTS as DATA } from "data-raw";
import { mapMusicEventsToCards } from "./utils";

const solo: MusicEvent[] = DATA.filter(
  ({ company }: MusicEvent): boolean => company.length === 0
).map((musicEvent: MusicEvent) => ({
  ...musicEvent,
  hideCompanySymbols: true
}));

export const SOLO: CardProps[] = mapMusicEventsToCards(solo);
