import { isInFuture } from "./basic";

interface IGetItemCounts {
  item: {
    actor?: IActor;
    city?: ICity;
    country?: ICountryTemplate;
    festival?: IFestival;
    friend?: IFriend;
    musician?: IMusician;
    musicVenue?: IMusicVenue;
    play?: IPlay;
    theatre?: ITheatreVenue;
  };
  data: {
    gigCards?: Array<IGigCard>;
    theatreCards?: Array<ITheatreCard>;
    travelCards?: Array<ITravelCard>;
  };
}

export const getItemCounts = ({
  item: {
    actor,
    city,
    country,
    festival,
    friend,
    musician,
    musicVenue,
    play,
    theatre
  },
  data: { gigCards, theatreCards, travelCards }
}: IGetItemCounts): IPastAndFutureCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  const incremementPastOrFutureCount = (date: Date): void => {
    if (isInFuture(date)) {
      futureCount += 1;
    } else {
      pastCount += 1;
    }
  };

  actor &&
    theatreCards &&
    theatreCards.forEach(({ cast, date }: ITheatreCard): void => {
      if (cast && cast.includes(actor)) incremementPastOrFutureCount(date);
    });

  (city || country) &&
    travelCards &&
    travelCards.forEach(
      ({ title, subtitle, hidden, dates }: ITravelCard): void => {
        if (
          (country &&
            ((title && title.includes(country)) ||
              (hidden && hidden.includes(country)) ||
              (subtitle && subtitle.includes(country)))) ||
          (city &&
            ((title && title.includes(city)) ||
              (hidden && hidden.includes(city)) ||
              (subtitle && subtitle.includes(city))))
        )
          incremementPastOrFutureCount(dates[0]);
      }
    );

  festival &&
    gigCards &&
    gigCards.forEach((gig: IGigCard): void => {
      if (gig.festival === festival) incremementPastOrFutureCount(gig.dates[0]);
    });

  friend &&
    gigCards &&
    gigCards.forEach(({ company, dates }: IGigCard): void => {
      if (company.includes(friend)) incremementPastOrFutureCount(dates[0]);
    });

  friend &&
    theatreCards &&
    theatreCards.forEach(({ company, date }: ITheatreCard): void => {
      if (company.includes(friend)) incremementPastOrFutureCount(date);
    });

  friend &&
    travelCards &&
    travelCards.forEach(({ company, dates }: ITravelCard): void => {
      if (company.includes(friend)) incremementPastOrFutureCount(dates[0]);
    });

  musician &&
    gigCards &&
    gigCards.forEach(({ headline, support, lineup, dates }: IGigCard): void => {
      if (
        headline === musician ||
        (support && support.includes(musician)) ||
        (lineup && lineup.includes(musician))
      )
        incremementPastOrFutureCount(dates[0]);
    });

  musicVenue &&
    gigCards &&
    gigCards.forEach(({ venue, dates }: IGigCard): void => {
      if (venue === musicVenue) incremementPastOrFutureCount(dates[0]);
    });

  play &&
    theatreCards &&
    theatreCards.forEach((theatreCard: ITheatreCard): void => {
      if (theatreCard.play === play)
        incremementPastOrFutureCount(theatreCard.date);
    });

  theatre &&
    theatreCards &&
    theatreCards.forEach((theatreCard: ITheatreCard): void => {
      if (theatre === theatreCard.theatre)
        incremementPastOrFutureCount(theatreCard.date);
    });

  return { pastCount, futureCount };
};

//
//
//
//
//
//
// BELOW TO BE RE-WRITTEN!!!!!!
//
//
//
//
//
//

interface IGetPageSectionItemCounts {
  itemToCount: any;
  dataToCompareAgainst: Array<any>;
}
export const getPageSectionItemCounts = ({
  itemToCount,
  dataToCompareAgainst
}: IGetPageSectionItemCounts) => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  dataToCompareAgainst.forEach((dataItem: any) => {
    if (
      // LOCATION
      (dataItem.title && dataItem.title.includes(itemToCount)) ||
      (dataItem.hidden && dataItem.hidden.includes(itemToCount)) ||
      (dataItem.subtitle && dataItem.subtitle.includes(itemToCount))
    ) {
      // if (isInFuture(dataItem.dates)) {
      //   futureCount += 1;
      // } else {
      //   pastCount += 1;
      // }
      pastCount += 1;
      // futureCount += 1;
    }
  });

  return { futureCount, pastCount };
};
