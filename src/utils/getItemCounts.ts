import { isInFuture } from "./basic";

interface IGetItemCounts {
  data: IPageSectionDataTypesExtended;
  item: {
    actor?: IActor;
    attraction?: IAttraction;
    city?: ICity;
    country?: ICountryTemplate;
    festival?: IFestivalTitle;
    friend?: IFriend;
    island?: IIsland;
    musician?: IMusician;
    musicVenue?: IMusicVenue;
    play?: IPlay;
    theatre?: ITheatre;
  };
}

//TODO: merge these 3 functions
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
  data: { festivals, musicEvents, theatreVisits, tripLegs },
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
}: IGetItemCounts): I_PastFutureCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  const incremementPastOrFutureCount = (date: Date): void => {
    if (isInFuture(date)) {
      futureCount += 1;
    } else {
      pastCount += 1;
    }
  };

  festivals &&
    festival &&
    festivals.forEach(({ title, dates }: IFestival): void => {
      if (festival === title) {
        incremementPastOrFutureCount(dates[0]);
      }
    });

  musicEvents &&
    (musician || friend || musicVenue) &&
    musicEvents.forEach(
      ({ dates, musicians, venue, company }: IMusicEvent): void => {
        if (
          (musician && musicians.includes(musician)) ||
          (friend && company.includes(friend)) ||
          (musicVenue && musicVenue === venue)
        )
          incremementPastOrFutureCount(dates[0]);
      }
    );

  tripLegs &&
    (attraction || city || country || friend || island) &&
    tripLegs.forEach((trip: ITripLeg): void => {
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
