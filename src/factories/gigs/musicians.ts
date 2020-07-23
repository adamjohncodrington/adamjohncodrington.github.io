import { MUSICIANS as musicians } from "@constants";
import { GIGS_AND_FESTIVALS as DATA } from "data";
import {
  getItemCounts,
  moveTheSuffixToPrefix,
  detailsContainsFavourite
} from "utils";

const getMusicianMatches = (musician: IMusician): Array<IGigOrFestival> => {
  const musicianMatches: Array<IGigOrFestival> = [];
  DATA.forEach((gigOrFestival: IGigOrFestival): void => {
    if (gigOrFestival.musicians.includes(musician)) {
      musicianMatches.push(gigOrFestival);
    }
  });
  return musicianMatches;
};

const getMusicianFestivalDate = (
  musician: IMusician,
  { lineup, dates }: IFestival
): Date => {
  if (lineup.length === 1) return dates[0];

  for (let day = 0; day < lineup.length; day++) {
    if (lineup[day].includes(musician)) return dates[day];
  }

  alert(
    "There has been an error calculating which day you saw an artist at a festival on"
  );
  return new Date();
};

const getMusicianDetails = (
  musician: IMusician
): Array<ICountedListItemDetail> => {
  const musicianMatches: Array<IGigOrFestival> = getMusicianMatches(musician);
  return musicianMatches.map(
    ({
      dates,
      festival,
      gig,
      venue,
      favourite,
      video
    }: IGigOrFestival): ICountedListItemDetail => ({
      mainText: [
        festival ? festival.title.name : moveTheSuffixToPrefix(venue.name)
      ],
      dates: festival ? [getMusicianFestivalDate(musician, festival)] : dates,
      video,
      favourite: favourite && gig && gig.headline === musician
    })
  );
};

export const MUSICIANS: Array<ICountedListItem> = Object.values(musicians).map(
  (musician: IMusician): ICountedListItem => {
    const { name, previousStageName, noLongerExists } = musician;
    const details: Array<ICountedListItemDetail> = getMusicianDetails(musician);
    return {
      text: name,
      secondaryText: previousStageName && previousStageName.name,
      favourite: detailsContainsFavourite(details),
      ...getItemCounts({
        item: { musician },
        data: { gigsAndFestivals: DATA }
      }),
      noLongerExists,
      details
    };
  }
);
