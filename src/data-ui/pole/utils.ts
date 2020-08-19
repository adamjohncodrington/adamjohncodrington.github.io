import { getDateText, getSymbols, getDatesText } from "utils";

interface IOptions {
  sort: "asc" | "desc";
  showCategorySymbol: boolean;
}

export const mapPoleRoutinesToCards = (
  poleVideos: IPoleRoutine[],
  { sort, showCategorySymbol }: IOptions
): ICard[] => {
  const mapPoleRoutineToCard = ({
    date,
    choreographer,
    category,
    song: { musician, title },
    video
  }: IPoleRoutine): ICard => ({
    video,
    year: date.getFullYear(),
    sort: [sort === "asc" ? date : -date],
    symbols: getSymbols({
      company: [choreographer],
      poleCategory: showCategorySymbol ? category : undefined
    }),
    subtitle: musician.name,
    title,
    secondaryBody: getDateText(date)
  });
  return poleVideos.map(
    (poleVideo: IPoleRoutine): ICard => mapPoleRoutineToCard(poleVideo)
  );
};

export const mapPoleTricksVideosToCards = (
  poleTricksVideos: IPoleTricksVideo[],
  { sort, showCategorySymbol }: IOptions
): ICard[] => {
  const mapPoleTricksVideoToCard = ({
    dates: { start, end },
    instructor,
    category,
    studio,
    video
  }: IPoleTricksVideo): ICard => ({
    video,
    year: start.getFullYear(),
    sort: [sort === "asc" ? start : -start],
    symbols: getSymbols({
      company: [instructor],
      poleCategory: showCategorySymbol ? category : undefined
    }),
    title: getDatesText([start, end], { hideDay: true }),
    secondaryBody: studio.name
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
