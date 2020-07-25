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
    "There has been an error calculating which day you saw a musician at a festival on"
  );
  return new Date();
};

const getMusicianDetails = (musician: IMusician): Array<IBasicListItemDetail> =>
  getMusicianMatches(musician).map(
    ({
      dates,
      festival,
      gig,
      venue,
      favourite,
      video
    }: IGigOrFestival): IBasicListItemDetail => ({
      mainText: [
        festival ? festival.title.name : moveTheSuffixToPrefix(venue.name)
      ],
      dates: festival ? [getMusicianFestivalDate(musician, festival)] : dates,
      video: gig ? (gig.headline === musician ? video : undefined) : undefined,
      favourite: favourite && gig && gig.headline === musician
    })
  );

export const MUSICIANS: Array<IBasicListItem> = Object.values(musicians).map(
  (musician: IMusician): IBasicListItem => {
    const { name, previousStageName, noLongerExists } = musician;
    const details: Array<IBasicListItemDetail> = getMusicianDetails(musician);
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
