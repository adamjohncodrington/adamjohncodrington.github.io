import { MUSIC_EVENTS as DATA } from "data-raw";
import { splitMusicEventsIntoYears } from "utils";

export const YEARS: Array<Array<IMusicEvent>> = splitMusicEventsIntoYears(DATA);
