import { getDateText } from "utils";

export const mapPoleRoutinesToCards = (
  poleVideos: Array<IPoleRoutine>
): Array<ICard> => {
  const mapPoleRoutineToCard = ({
    date,
    song: { musician, title },
    video
  }: IPoleRoutine): ICard => ({
    video,
    subtitle: musician.name,
    title,
    secondaryBody: getDateText(date)
  });
  return poleVideos.map(
    (poleVideo: IPoleRoutine): ICard => mapPoleRoutineToCard(poleVideo)
  );
};
