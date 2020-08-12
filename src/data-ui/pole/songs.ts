import { SONGS as songs } from "@constants";
import { POLE_ROUTINES as DATA } from "data-raw";

const getSongMatches = (song: ISong): IPoleRoutine[] =>
  DATA.reduce(
    (matches: IPoleRoutine[], routine: IPoleRoutine): IPoleRoutine[] =>
      routine.song === song ? [...matches, routine] : matches,
    []
  );

export const SONGS: Array<IMiniCard> = Object.values(songs).map(
  (song: ISong): IMiniCard => {
    const { musician, title } = song;
    const artistAndSong: string = `${musician.name} - ${title}`;
    const songMatches: IPoleRoutine[] = getSongMatches(song);
    const video: IVideo = songMatches[0] && songMatches[0].video;
    return {
      primaryText: artistAndSong,
      sort: [artistAndSong],
      primaryCount: songMatches.length,
      video
    };
  }
);
