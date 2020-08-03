import { SONGS as songs } from "@constants";
import { POLE_ROUTINES as DATA } from "data-raw";

const getSongMatches = (song: ISong): Array<IPoleRoutine> =>
  DATA.reduce(
    (matches: Array<IPoleRoutine>, routine: IPoleRoutine) =>
      routine.song === song ? [...matches, routine] : matches,
    []
  );

export const SONGS: Array<IMiniCard> = Object.values(songs).map(
  (song: ISong): IMiniCard => {
    const { musician, title } = song;
    const songMatches: Array<IPoleRoutine> = getSongMatches(song);
    const artistAndSong: string = `${musician.name} - ${title}`;
    return {
      primaryText: artistAndSong,
      sort: [artistAndSong],
      primaryCount: songMatches.length,
      video: songMatches[0].video
    };
  }
);
