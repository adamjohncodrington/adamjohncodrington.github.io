import { APPLE_MUSIC_URL_PREFIX } from "config";

import {
  getGigTitle,
  getGigSubtitle,
  getGigMusicians,
  getFestivalTitle,
  getFestivalSubtitle,
  getFestivalMusicians,
  getTheatreVisitTitle,
  getTripTitle,
  getTripSubtitle,
  getTripBody,
  getMusicianStageNameAtTime,
  getTheatreVisitSubtitle
} from "./get";
import { moveTheSuffixToPrefix, getDatesText, getDateText } from "./basic";
import { getCountdownText } from "./getCountdownText";
import { generateIngredientListItem } from "./generateIngredientListItem";

export const mapPoleRoutinesToCards = (
  poleVideos: Array<IPoleRoutine>
): Array<ICard> => {
  const mapPoleRoutineToCard = ({
    date,
    song: { musician, title },
    video
  }: IPoleRoutine): ICard => ({
    video,
    subtitle: musician.name,
    title,
    secondaryBody: getDateText(date),
    hideVideoIcon: true,
    company: []
  });
  return poleVideos.map(
    (poleVideo: IPoleRoutine): ICard => mapPoleRoutineToCard(poleVideo)
  );
};

export const mapGigsToMusicEvents = (gigs: Array<IGig>): Array<IMusicEvent> => {
  const mapGigToMusicEvent = (gig: IGig): IMusicEvent => ({
    ...gig,
    gig,
    dates: [gig.date],
    title: getGigTitle(gig),
    subtitle: getGigSubtitle(gig),
    musicians: getGigMusicians(gig)
  });
  return gigs.map((gig: IGig): IMusicEvent => mapGigToMusicEvent(gig));
};

export const mapFestivalsToMusicEvents = (
  festivals: Array<IFestival>
): Array<IMusicEvent> => {
  const mapFestivalToMusicEvent = (festival: IFestival): IMusicEvent => ({
    ...festival,
    festival,
    title: getFestivalTitle(festival),
    subtitle: getFestivalSubtitle(festival),
    musicians: getFestivalMusicians(festival)
  });
  return festivals.map(
    (festival: IFestival): IMusicEvent => mapFestivalToMusicEvent(festival)
  );
};

export const mapMusicEventsToCards = (
  musicEvents: Array<IMusicEvent>
): Array<ICard> => {
  const mapMusicEventToCard = (musicEvent: IMusicEvent): ICard => {
    const { venue, dates, ticketType } = musicEvent;
    return {
      ...musicEvent,
      body: moveTheSuffixToPrefix(venue.name),
      secondaryBody: getDatesText(dates),
      countdownText: getCountdownText(dates[0]),
      note: ticketType
    };
  };
  return musicEvents.map(
    (musicEvent: IMusicEvent): ICard => mapMusicEventToCard(musicEvent)
  );
};

export const mapTheatreVisitsToCards = (
  theatreVisits: Array<ITheatreVisit>
): Array<ICard> => {
  const mapTheatreVisitToCard = (theatreVisit: ITheatreVisit): ICard => {
    const { theatre, date } = theatreVisit;
    return {
      ...theatreVisit,
      title: getTheatreVisitTitle(theatreVisit),
      subtitle: getTheatreVisitSubtitle(theatreVisit),
      body: moveTheSuffixToPrefix(theatre.name),
      secondaryBody: getDateText(date)
    };
  };
  return theatreVisits.map(
    (theatreVisit: ITheatreVisit): ICard => mapTheatreVisitToCard(theatreVisit)
  );
};

export const mapTripLegsToCards = (tripLegs: Array<ITripLeg>): Array<ICard> => {
  const mapTripLegToCard = (tripLeg: ITripLeg): ICard => {
    const { dates } = tripLeg;
    return {
      ...tripLeg,
      title: getTripTitle(tripLeg),
      subtitle: getTripSubtitle(tripLeg),
      secondaryBody: getTripBody(tripLeg),
      body: getDatesText(dates)
    };
  };
  return tripLegs.map((tripLeg: ITripLeg): ICard => mapTripLegToCard(tripLeg));
};

export const mapAlbumCardsToCards = (
  albumCards: Array<IAlbumCard>
): Array<ICard> => {
  const mapAlbumCardToCard = ({
    title,
    musician,
    year,
    artwork,
    hideYear,
    appleMusicId
  }: IAlbumCard): ICard => ({
    title,
    subtitle: moveTheSuffixToPrefix(
      getMusicianStageNameAtTime({ musician, year })
    ),
    body: hideYear ? undefined : year.toString(),
    company: [],
    headerPhoto: { ...artwork, href: APPLE_MUSIC_URL_PREFIX + appleMusicId }
  });
  return albumCards.map(
    (albumCard: IAlbumCard): ICard => mapAlbumCardToCard(albumCard)
  );
};

export const mapMethodToListItems = (
  method: Array<string>
): Array<IRecipeListItem> =>
  method.map(
    (item: string): IRecipeListItem => ({
      listItemText: item,
      addPaddingTop: false
    })
  );

export const mapServeWithToListItems = (
  serveWith: Array<Array<IRecipeIngredient>>
): Array<IRecipeListItem> => {
  const getServeWithListItem = (
    lineOptions: Array<IRecipeIngredient>
  ): string => {
    let output: string = "";
    lineOptions.forEach(
      ({ ingredient: { displayText } }: IRecipeIngredient, index: number) =>
        (output +=
          index === 0
            ? displayText
            : index === lineOptions.length - 1
            ? ` or ${displayText}`
            : `, ${displayText}`)
    );

    return output;
  };
  return serveWith.map(
    (lineOptions: Array<IRecipeIngredient>): IRecipeListItem => ({
      listItemText: getServeWithListItem(lineOptions),
      addPaddingTop: false
    })
  );
};

export const mapIngredientsToListItems = (
  ingredientsGroups: Array<Array<IRecipeIngredient>>
): Array<IRecipeListItem> => {
  let ingredientsWithPaddingFlags: Array<IRecipeListItem> = [];
  ingredientsGroups.forEach(
    (ingredientsGroup: Array<IRecipeIngredient>, INDEX_HIGH: number) => {
      ingredientsGroup.forEach(
        (ingredient: IRecipeIngredient, INDEX_LOW: number) => {
          ingredientsWithPaddingFlags.push({
            listItemText: generateIngredientListItem(ingredient),
            addPaddingTop: INDEX_HIGH !== 0 && INDEX_LOW === 0
          });
        }
      );
    }
  );
  return ingredientsWithPaddingFlags;
};
