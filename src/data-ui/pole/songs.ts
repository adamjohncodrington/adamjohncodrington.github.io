import { SONGS as songs } from "@constants";
import { POLE_ROUTINES as DATA } from "data-raw";

const getSongMatches = (song: Song): IPoleRoutine[] =>
  DATA.reduce(
    (matches: IPoleRoutine[], routine: IPoleRoutine): IPoleRoutine[] =>
      routine.song === song ? [...matches, routine] : matches,
    []
  );

export const SONGS: MiniCardProps[] = Object.values(songs).map(
  (song: Song): MiniCardProps => {
    const { musician, title } = song;
    const songMatches: IPoleRoutine[] = getSongMatches(song);
    const video: IVideo = songMatches[0] && songMatches[0].video;
    return {
      secondaryText: title,
      primaryText: musician.name,
      sort: [musician.name, title],
      primaryCount: songMatches.length,
      video
    };
  }
);
