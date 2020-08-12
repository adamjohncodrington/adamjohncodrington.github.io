import { getDateText, getSymbols, getDatesText } from "utils";

export const mapPoleRoutinesToCards = (poleVideos: IPoleRoutine[]): ICard[] => {
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
  poleTricksVideos: IPoleTricksVideo[]
): ICard[] => {
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

export const mapPoleRoutineToMiniCardDetail = ({
  song: {
    musician: { name },
    title
  },
  date,
  video
}: IPoleRoutine): IMiniCardPanelDetail => ({
  mainText: [`${name} - ${title}`],
  secondaryText: getDateText(date, { hideDay: true }),
  sort: [date],
  video
});

export const mapPoleTricksVideoToMiniCardDetail = ({
  dates: { start, end },
  video
}: IPoleTricksVideo): IMiniCardPanelDetail => ({
  mainText: ["Tricks"],
  secondaryText: getDatesText([start, end], { hideDay: true }),
  sort: [start],
  video
});
