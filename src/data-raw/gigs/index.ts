import * as festivals from "./festivals";
import * as GIGS_2006_2010 from "./gigs-2006-2010";
import * as GIGS_2011_2013 from "./gigs-2011-2013";
import * as GIGS_2014_2016 from "./gigs-2014-2016";
import * as GIGS_2017_2019 from "./gigs-2017-2019";
import * as GIGS_2020_2022 from "./gigs-2020-2022";
import { mapGigsToMusicEvents, mapFestivalsToMusicEvents } from "./utils";

export const FESTIVALS: IFestival[] = Object.values(festivals);

export const GIGS: IGig[] = Object.values({
  ...GIGS_2006_2010,
  ...GIGS_2011_2013,
  ...GIGS_2014_2016,
  ...GIGS_2017_2019,
  ...GIGS_2020_2022
});

export const MUSIC_EVENTS: IMusicEvent[] = [
  ...mapGigsToMusicEvents(GIGS),
  ...mapFestivalsToMusicEvents(FESTIVALS)
];
