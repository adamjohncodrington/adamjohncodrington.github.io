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
    sort: [sort === "asc" ? date.valueOf() : -date.valueOf()],
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

interface IOptionsExtended extends IOptions {
  addIndex: boolean;
}

export const mapPoleTricksVideosToCards = (
  poleTricksVideos: IPoleTricksVideo[],
  { sort, showCategorySymbol, addIndex }: IOptionsExtended
): ICard[] => {
  const mapPoleTricksVideoToCard = (
    {
      dates: { start, end },
      instructor,
      category,
      studio,
      video
    }: IPoleTricksVideo,
    index: number
  ): ICard => {
    const standardTitle: string = getDatesText([start, end], { hideDay: true });

    return {
      video,
      year: start.getFullYear(),
      sort: [sort === "asc" ? start.valueOf() : -start.valueOf()],
      symbols: getSymbols({
        company: [instructor],
        poleCategory: showCategorySymbol ? category : undefined
      }),
      title: addIndex ? `${index}. ${standardTitle}` : standardTitle,
      secondaryBody: studio.name
    };
  };
  return poleTricksVideos
    .sort((a: IPoleTricksVideo, b: IPoleTricksVideo): number =>
      a.dates.start > b.dates.start ? 1 : -1
    )
    .map(
      (poleTricksVideo: IPoleTricksVideo, index: number): ICard =>
        mapPoleTricksVideoToCard(poleTricksVideo, index + 1)
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
  sort: [date.valueOf()],
  video
});

export const mapPoleTricksVideoToMiniCardDetail = ({
  dates: { start, end },
  video
}: IPoleTricksVideo): IMiniCardPanelDetail => ({
  mainText: ["Tricks"],
  secondaryText: getDatesText([start, end], { hideDay: true }),
  sort: [start.valueOf()],
  video
});
