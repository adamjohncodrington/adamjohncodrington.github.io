import { Musician, Person, Vinyl } from "types";

import { isInFuture } from "./basic";

interface IGetItemCounts {
  data: IPageSectionItemDataTypes;
  item: {
    actor?: Actor;
    attraction?: IAttraction;
    city?: City;
    country?: ICountryTemplate;
    festival?: FestivalTitle;
    friend?: Person;
    island?: IIsland;
    musician?: Musician;
    musicVenue?: MusicVenue;
    play?: Play;
    theatre?: Theatre;
  };
}

//TODO: merge these 3 functions
export const countryMatchExists = (
  countryToMatch: ICountryTemplate,
  trip: TripLeg
): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (trip.country === countryToMatch) return true;
  if (primaryLocations && primaryLocations.includes(countryToMatch))
    return true;
  if (secondaryLocations && secondaryLocations.includes(countryToMatch))
    return true;
  if (hiddenLocations && hiddenLocations.includes(countryToMatch)) return true;
  return false;
};

export const cityMatchExists = (cityToMatch: City, trip: TripLeg): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (primaryLocations && primaryLocations.includes(cityToMatch)) return true;
  if (secondaryLocations && secondaryLocations.includes(cityToMatch))
    return true;
  if (hiddenLocations && hiddenLocations.includes(cityToMatch)) return true;
  return false;
};

export const attractionMatchExists = (
  attractionToMatch: IAttraction,
  trip: TripLeg
): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (primaryLocations && primaryLocations.includes(attractionToMatch))
    return true;
  if (secondaryLocations && secondaryLocations.includes(attractionToMatch))
    return true;
  if (hiddenLocations && hiddenLocations.includes(attractionToMatch))
    return true;
  return false;
};

const islandMatchExists = (islandToMatch: IIsland, trip: TripLeg): boolean => {
  const { primaryLocations, secondaryLocations, hiddenLocations } = trip;

  if (primaryLocations && primaryLocations.includes(islandToMatch)) return true;
  if (secondaryLocations && secondaryLocations.includes(islandToMatch))
    return true;
  if (hiddenLocations && hiddenLocations.includes(islandToMatch)) return true;
  return false;
};

export const getItemCounts = ({
  item: {
    actor: actorToMatch,
    attraction: attractionToMatch,
    city: cityToMatch,
    country: countryToMatch,
    festival: festivalToMatch,
    friend: friendToMatch,
    island: islandToMatch,
    musician: musicianToMatch,
    musicVenue: musicVenueToMatch,
    play: playToMatch,
    theatre: theatreToMatch
  },
  data: { festivals, musicEvents, theatreVisits, tripLegs, vinyls }
}: IGetItemCounts): I_PastFutureCounts => {
  let pastCount: number = 0;
  let futureCount: number = 0;

  const incremementPastOrFutureCount = (date: Date): void => {
    if (isInFuture(date)) {
      futureCount += 1;
      return;
    }
    pastCount += 1;
  };

  vinyls &&
    musicianToMatch &&
    vinyls.forEach(({ musician }: Vinyl): void => {
      if (musicianToMatch === musician) pastCount += 1;
    });

  festivals &&
    festivalToMatch &&
    festivals.forEach(({ title, dates }: Festival): void => {
      if (festivalToMatch === title) {
        incremementPastOrFutureCount(dates[0]);
      }
    });

  musicEvents &&
    (musicianToMatch || friendToMatch || musicVenueToMatch) &&
    musicEvents.forEach(
      ({ dates, musicians, venue, company }: MusicEvent): void => {
        if (
          (musicianToMatch && musicians.includes(musicianToMatch)) ||
          (friendToMatch && company.includes(friendToMatch)) ||
          (musicVenueToMatch && musicVenueToMatch === venue)
        )
          incremementPastOrFutureCount(dates[0]);
      }
    );

  tripLegs &&
    (attractionToMatch ||
      cityToMatch ||
      countryToMatch ||
      friendToMatch ||
      islandToMatch) &&
    tripLegs.forEach((trip: TripLeg): void => {
      const { company, dates } = trip;
      if (
        (attractionToMatch && attractionMatchExists(attractionToMatch, trip)) ||
        (countryToMatch && countryMatchExists(countryToMatch, trip)) ||
        (cityToMatch && cityMatchExists(cityToMatch, trip)) ||
        (islandToMatch && islandMatchExists(islandToMatch, trip)) ||
        (friendToMatch && company.includes(friendToMatch))
      )
        incremementPastOrFutureCount(dates[0]);
    });

  theatreVisits &&
    (actorToMatch || friendToMatch || playToMatch || theatreToMatch) &&
    theatreVisits.forEach((theatreVisit: TheatreVisit): void => {
      const { cast, company, date, play, theatre } = theatreVisit;
      if (
        (actorToMatch && cast && cast.includes(actorToMatch)) ||
        (playToMatch && play === playToMatch) ||
        (theatreToMatch && theatre === theatreToMatch) ||
        (friendToMatch && company.includes(friendToMatch))
      )
        incremementPastOrFutureCount(date);
    });

  return { pastCount, futureCount };
};
