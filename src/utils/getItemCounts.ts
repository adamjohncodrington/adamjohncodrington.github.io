import { isInFuture } from "./basic";

interface IGetItemCounts {
  data: {
    gigs?: Array<IGig>;
    theatreVisits?: Array<ITheatreVisit>;
    trips?: Array<ITripLeg>;
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

  if (lineup) {
    let lineupMatchFound: boolean = false;
    lineup.forEach((day: Array<IMusician>): void => {
      if (day.includes(musician)) lineupMatchFound = true;
    });
    return lineupMatchFound;
  }
  return false;
};

//TODO: merge these 3
export const countryMatchExists = (
  country: ICountryTemplate,
  trip: ITripLeg
): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (trip.country === country) return true;
  if (primaryLocations && primaryLocations.includes(country)) return true;
  if (secondaryLocations && secondaryLocations.includes(country)) return true;
  if (hiddenLocations && hiddenLocations.includes(country)) return true;
  return false;
};

export const cityMatchExists = (city: ICity, trip: ITripLeg): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (primaryLocations && primaryLocations.includes(city)) return true;
  if (secondaryLocations && secondaryLocations.includes(city)) return true;
  if (hiddenLocations && hiddenLocations.includes(city)) return true;
  return false;
};

export const attractionMatchExists = (
  attraction: IAttraction,
  trip: ITripLeg
): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (primaryLocations && primaryLocations.includes(attraction)) return true;
  if (secondaryLocations && secondaryLocations.includes(attraction))
    return true;
  if (hiddenLocations && hiddenLocations.includes(attraction)) return true;
  return false;
};

const islandMatchExists = (island: IIsland, trip: ITripLeg): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (primaryLocations && primaryLocations.includes(island)) return true;
  if (secondaryLocations && secondaryLocations.includes(island)) return true;
  if (hiddenLocations && hiddenLocations.includes(island)) return true;
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
    trips.forEach((trip: ITripLeg): void => {
      const { company, dates } = trip;
      if (
        (attraction && attractionMatchExists(attraction, trip)) ||
        (country && countryMatchExists(country, trip)) ||
        (city && cityMatchExists(city, trip)) ||
        (island && islandMatchExists(island, trip)) ||
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
