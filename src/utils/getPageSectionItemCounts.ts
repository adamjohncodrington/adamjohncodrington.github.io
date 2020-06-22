import { isInFuture } from "./isInFuture";

interface IGetPageSectionItemCounts {
  itemToCount: any;
  data: Array<any>;
}

export const getPageSectionItemCounts = ({
  itemToCount,
  data
}: IGetPageSectionItemCounts) => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  data.forEach((dataItem: any) => {
    if (
      // MUSICIAN
      dataItem.headline === itemToCount ||
      (dataItem.support && dataItem.support.includes(itemToCount)) ||
      (dataItem.lineup && dataItem.lineup.includes(itemToCount)) ||
      // FESTIVAL
      dataItem.festival === itemToCount ||
      // FRIEND
      (dataItem.company && dataItem.company.includes(itemToCount)) ||
      // MUSIC VENUE
      dataItem.venue === itemToCount ||
      // PLAY
      dataItem.play === itemToCount ||
      // THEATRE
      dataItem.theatre === itemToCount ||
      // LOCATION
      (dataItem.title && dataItem.title.includes(itemToCount)) ||
      (dataItem.hidden && dataItem.hidden.includes(itemToCount)) ||
      (dataItem.subtitle && dataItem.subtitle.includes(itemToCount)) ||
      // ACTOR
      (dataItem.cast && dataItem.cast.includes(itemToCount))
    ) {
      if (isInFuture(dataItem.dates)) {
        futureCount += 1;
      } else {
        pastCount += 1;
      }
    }
  });

  return { futureCount, pastCount };
};
