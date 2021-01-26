import { getDateText, getSymbols, getDatesText } from "utils";

interface Options {
  sort: "asc" | "desc";
  showCategorySymbol: boolean;
}

export const mapPoleRoutinesToCards = (
  poleVideos: PoleRoutine[],
  { sort, showCategorySymbol }: Options
): CardProps[] => {
  const mapPoleRoutineToCard = ({
    date,
    choreographer,
    category,
    song: { musician, title },
    video
  }: PoleRoutine): CardProps => ({
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

  return poleVideos.map(mapPoleRoutineToCard);
};

interface ExtendedOptions extends Options {
  addIndex: boolean;
}

export const mapPoleTricksVideosToCards = (
  poleTricksVideos: PoleTricksVideo[],
  { sort, showCategorySymbol, addIndex }: ExtendedOptions
): CardProps[] => {
  const mapPoleTricksVideoToCard = (
    {
      dates: { start, end },
      instructor,
      category,
      studio,
      video
    }: PoleTricksVideo,
    index: number
  ): CardProps => {
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
    .sort((a: PoleTricksVideo, b: PoleTricksVideo): number =>
      a.dates.start > b.dates.start ? 1 : -1
    )
    .map(
      (poleTricksVideo: PoleTricksVideo, index: number): CardProps =>
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
}: PoleRoutine): MiniCardPanelDetailProps => ({
  mainText: [`${name} - ${title}`],
  secondaryText: getDateText(date, { hideDay: true }),
  sort: [date.valueOf()],
  video
});

export const mapPoleTricksVideoToMiniCardDetail = ({
  dates: { start, end },
  video
}: PoleTricksVideo): MiniCardPanelDetailProps => ({
  mainText: ["Tricks"],
  secondaryText: getDatesText([start, end], { hideDay: true }),
  sort: [start.valueOf()],
  video
});
