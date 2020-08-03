import { getDateText, filterMiniCards, getSymbols } from "utils";

import { CONTEMPORARY, EXOTIC, IMPROV } from "./videos";
import { INSTRUCTORS } from "./instructors";
import { PHOTOS } from "./photos";
import { SONGS } from "./songs";
import { STUDIOS } from "./studios";

const mapPoleRoutinesToCards = (
  poleVideos: Array<IPoleRoutine>
): Array<ICard> => {
  const mapPoleRoutineToCard = ({
    date,
    choreographer,
    song: { musician, title },
    video
  }: IPoleRoutine): ICard => ({
    video,
    sort: [date],
    symbols: getSymbols({ company: [choreographer] }),
    subtitle: musician.name,
    title,
    secondaryBody: getDateText(date)
  });
  return poleVideos.map(
    (poleVideo: IPoleRoutine): ICard => mapPoleRoutineToCard(poleVideo)
  );
};

export const POLE = {
  CONTEMPORARY: mapPoleRoutinesToCards(CONTEMPORARY),
  EXOTIC: mapPoleRoutinesToCards(EXOTIC),
  IMPROV: mapPoleRoutinesToCards(IMPROV),
  INSTRUCTORS: filterMiniCards(INSTRUCTORS),
  PHOTOS,
  SONGS: filterMiniCards(SONGS),
  STUDIOS
};
