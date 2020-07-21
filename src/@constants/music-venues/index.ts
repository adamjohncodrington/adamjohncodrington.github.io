import * as BIRMINGHAM from "./birmingham";
import * as LONDON from "./london";
import * as MANCHESTER from "./manchester";
import * as NOTTINGHAM from "./nottingham";
import * as ELSEWHERE from "./elsewhere";

export const MUSIC_VENUES = {
  ...BIRMINGHAM,
  ...ELSEWHERE,
  ...LONDON,
  ...MANCHESTER,
  ...NOTTINGHAM
};
