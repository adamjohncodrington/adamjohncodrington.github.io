import { getDateText, getSymbols, getDatesText } from "utils";

export const mapPoleRoutinesToCards = (
  poleVideos: Array<IPoleRoutine>
): Array<ICard> => {
  const mapPoleRoutineToCard = ({
    date,
    choreographer,
    song: { musician, title },
    video
  }: IPoleRoutine): ICard => ({
    video,
    sort: [-date],
    symbols: getSymbols({ company: [choreographer] }),
    subtitle: musician.name,
    title,
    secondaryBody: getDateText(date)
  });
  return poleVideos.map(
    (poleVideo: IPoleRoutine): ICard => mapPoleRoutineToCard(poleVideo)
  );
};

export const mapPoleTricksVideosToCards = (
  poleTricksVideos: Array<IPoleTricksVideo>
): Array<ICard> => {
  const mapPoleTricksVideoToCard = ({
    dates: { start, end },
    instructor,
    studio,
    video
  }: IPoleTricksVideo): ICard => ({
    video,
    sort: [-start],
    symbols: getSymbols({ company: [instructor] }),
    title: getDatesText([start, end], { hideDay: true }),
    body: studio.name
  });
  return poleTricksVideos.map(
    (poleTricksVideo: IPoleTricksVideo): ICard =>
      mapPoleTricksVideoToCard(poleTricksVideo)
  );
};
