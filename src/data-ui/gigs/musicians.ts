import { MUSICIANS as musicians } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts, detailsContainsFavourite } from "utils";

const getMusicianMatches = (musician: IMusician): Array<IMusicEvent> => {
  const musicianMatches: Array<IMusicEvent> = [];
  DATA.forEach((musicEvent: IMusicEvent): void => {
    if (musicEvent.musicians.includes(musician))
      musicianMatches.push(musicEvent);
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

const getMusicianDetails = (musician: IMusician): Array<IMiniCardPanelDetail> =>
  getMusicianMatches(musician).map(
    ({
      dates,
      festival,
      gig,
      venue,
      favourite,
      video
    }: IMusicEvent): IMiniCardPanelDetail => ({
      mainText: [festival ? festival.title.name : venue.name],
      sort: [dates[0]],
      dates: festival ? [getMusicianFestivalDate(musician, festival)] : dates,
      video: gig ? (gig.headline === musician ? video : undefined) : undefined,
      favourite: favourite && gig && gig.headline === musician
    })
  );

export const MUSICIANS: Array<IMiniCard> = Object.values(musicians).map(
  (musician: IMusician): IMiniCard => {
    const { name, previousStageName, noLongerExists } = musician;
    const details: Array<IMiniCardPanelDetail> = getMusicianDetails(musician);
    return {
      text: name,
      sort: [name],
      secondaryText: previousStageName && previousStageName.name,
      favourite: detailsContainsFavourite(details),
      ...getItemCounts({
        item: { musician },
        data: { musicEvents: DATA }
      }),
      noLongerExists,
      details
    };
  }
);
