import * as festivals_w_videos from "./festivals-w-videos";
import * as festivals_wo_videos from "./festivals-wo-videos";
import * as GIGS_2006_2010 from "./gigs-2006-2010";
import * as GIGS_2011_2013 from "./gigs-2011-2013";
import * as GIGS_2014_2016 from "./gigs-2014-2016";
import * as GIGS_2017_2020 from "./gigs-2017-2020";
import * as GIGS_2021_PLUS from "./gigs-2021+";
import { mapGigsToMusicEvents, mapFestivalsToMusicEvents } from "./utils";

export const FESTIVALS_W_VIDEOS: IFestivalWithVideo[] = Object.values(
  festivals_w_videos
);

export const FESTIVALS: IFestival[] = Object.values({
  ...festivals_w_videos,
  ...festivals_wo_videos
});

export const GIGS: IGig[] = Object.values({
  ...GIGS_2006_2010,
  ...GIGS_2011_2013,
  ...GIGS_2014_2016,
  ...GIGS_2017_2020,
  ...GIGS_2021_PLUS
});

export const MUSIC_EVENTS: IMusicEvent[] = [
  ...mapGigsToMusicEvents(GIGS),
  ...mapFestivalsToMusicEvents(FESTIVALS)
];
