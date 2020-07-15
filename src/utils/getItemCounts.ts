import { isInFuture } from "./basic";

interface IGetItemCounts {
  data: {
    gigs?: Array<IGig>;
    theatreVisits?: Array<ITheatreVisit>;
    trips?: Array<ITrip>;
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

export const musicianMatchExists = (
  musician: IMusician,
  { headline, support, lineup }: IGig
): boolean => {
  if (headline === musician) return true;
  if (support && support.includes(musician)) return true;
  if (lineup && lineup.includes(musician)) return true;
  return false;
};

export const countryMatchExists = (
  country: ICountryTemplate,
  { title, subtitle, body, hidden }: ITrip
): boolean => {
  if (title && title.includes(country)) return true;
  if (subtitle && subtitle.includes(country)) return true;
  if (body && body.includes(country)) return true;
  if (hidden && hidden.includes(country)) return true;
  return false;
};

export const cityMatchExists = (
  city: ICity,
  { title, subtitle, body, hidden }: ITrip
): boolean => {
  if (title && title.includes(city)) return true;
  if (subtitle && subtitle.includes(city)) return true;
  if (body && body.includes(city)) return true;
  if (hidden && hidden.includes(city)) return true;
  return false;
};

export const attractionMatchExists = (
  attraction: IAttraction,
  { title, subtitle, body, hidden }: ITrip
): boolean => {
  if (title && title.includes(attraction)) return true;
  if (subtitle && subtitle.includes(attraction)) return true;
  if (body && body.includes(attraction)) return true;
  if (hidden && hidden.includes(attraction)) return true;
  return false;
};

export const getItemCounts = ({
  data: { gigs, theatreVisits, trips },
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

  gigs &&
    (festival || friend || musician || musicVenue) &&
    gigs.forEach((gig: IGig): void => {
      const { company, dates, venue } = gig;
      if (
        (festival && gig.festival === festival) ||
        (friend && company.includes(friend)) ||
        (musicVenue && musicVenue === venue) ||
        (musician && musicianMatchExists(musician, gig))
      )
        incremementPastOrFutureCount(dates[0]);
    });

  trips &&
    (attraction || city || country || friend || island) &&
    trips.forEach((trip: ITrip): void => {
      const { title, company, subtitle, body, dates } = trip;

      if (
        (attraction && attractionMatchExists(attraction, trip)) ||
        (country && countryMatchExists(country, trip)) ||
        (city && cityMatchExists(city, trip)) ||
        (island &&
          ((title && title.includes(island)) ||
            (body && body.includes(island)) ||
            (subtitle && subtitle.includes(island)))) ||
        (friend && company.includes(friend))
      )
        incremementPastOrFutureCount(dates[0]);
    });

  theatreVisits &&
    (actor || friend || play || theatre) &&
    theatreVisits.forEach((theatreVisit: ITheatreVisit): void => {
      const { cast, company, date } = theatreVisit;
      if (
        (actor && cast && cast.includes(actor)) ||
        (play && theatreVisit.play === play) ||
        (theatre && theatreVisit.theatre === theatre) ||
        (friend && company.includes(friend))
      )
        incremementPastOrFutureCount(date);
    });

  return { pastCount, futureCount };
};
