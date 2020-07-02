import { isInFuture } from "./basic";

interface IGetItemCounts {
  data: {
    gigCards?: Array<IGigCard>;
    theatreCards?: Array<ITheatreCard>;
    travelCards?: Array<ITravelCard>;
  };
  item: {
    actor?: IActor;
    attraction?: IAttraction;
    city?: ICity;
    country?: ICountryTemplate;
    festival?: IFestival;
    friend?: IFriend;
    island?: IIsland;
    musician?: IMusician;
    musicVenue?: IMusicVenue;
    play?: IPlay;
    theatre?: ITheatreVenue;
  };
}

export const getItemCounts = ({
  data: { gigCards, theatreCards, travelCards },
  item: {
    actor,
    attraction,
    city,
    country,
    festival,
    friend,
    island,
    musician,
    musicVenue,
    play,
    theatre
  }
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

  gigCards &&
    (festival || friend || musician || musicVenue) &&
    gigCards.forEach(
      ({
        company,
        headline,
        support,
        dates,
        lineup,
        venue,
        ...rest
      }: IGigCard): void => {
        if (
          (festival && rest.festival === festival) ||
          (friend && company.includes(friend)) ||
          (musicVenue && musicVenue === venue) ||
          (musician &&
            (headline === musician ||
              (support && support.includes(musician)) ||
              (lineup && lineup.includes(musician))))
        )
          incremementPastOrFutureCount(dates[0]);
      }
    );

  travelCards &&
    (attraction || city || country || friend || island) &&
    travelCards.forEach(
      ({ title, company, subtitle, hidden, dates }: ITravelCard): void => {
        if (
          (attraction &&
            ((title && title.includes(attraction)) ||
              (hidden && hidden.includes(attraction)) ||
              (subtitle && subtitle.includes(attraction)))) ||
          (country &&
            ((title && title.includes(country)) ||
              (hidden && hidden.includes(country)) ||
              (subtitle && subtitle.includes(country)))) ||
          (city &&
            ((title && title.includes(city)) ||
              (hidden && hidden.includes(city)) ||
              (subtitle && subtitle.includes(city)))) ||
          (island &&
            ((title && title.includes(island)) ||
              (hidden && hidden.includes(island)) ||
              (subtitle && subtitle.includes(island)))) ||
          (friend && company.includes(friend))
        )
          incremementPastOrFutureCount(dates[0]);
      }
    );

  theatreCards &&
    (actor || friend || play || theatre) &&
    theatreCards.forEach(
      ({ cast, company, date, ...rest }: ITheatreCard): void => {
        if (
          (actor && cast && cast.includes(actor)) ||
          (play && rest.play === play) ||
          (theatre && rest.theatre === theatre) ||
          (friend && company.includes(friend))
        )
          incremementPastOrFutureCount(date);
      }
    );

  return { pastCount, futureCount };
};
