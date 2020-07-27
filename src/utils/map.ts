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

export const mapPoleVideoToVideoCard = ({
  date,
  song: { musician, title },
  ...rest
}: IPoleVideo): IVideoCard => ({
  ...rest,
  title: musician.name,
  subtitle: title,
  dates: [date]
});

export const mapPoleVideosToVideoCards = (
  poleVideos: Array<IPoleVideo>
): Array<IVideoCard> =>
  poleVideos.map(
    (poleVideo: IPoleVideo): IVideoCard => mapPoleVideoToVideoCard(poleVideo)
  );

// export const mapVideoCardToCard = (videoCard: IVideoCard): ICard => ({});

export const mapGigsToMusicEvents = (gigs: Array<IGig>): Array<IMusicEvent> =>
  gigs.map(
    (gig: IGig): IMusicEvent => ({
      ...gig,
      gig,
      dates: [gig.date],
      title: getGigTitle(gig),
      subtitle: getGigSubtitle(gig),
      musicians: getGigMusicians(gig)
    })
  );

export const mapFestivalsToMusicEvents = (
  festivals: Array<IFestival>
): Array<IMusicEvent> =>
  festivals.map(
    (festival: IFestival): IMusicEvent => ({
      ...festival,
      festival,
      title: getFestivalTitle(festival),
      subtitle: getFestivalSubtitle(festival),
      musicians: getFestivalMusicians(festival)
    })
  );

export const mapMusicEventToCard = (musicEvent: IMusicEvent): ICard => {
  const { venue, dates, ticketType } = musicEvent;
  return {
    ...musicEvent,
    body: moveTheSuffixToPrefix(venue.name),
    secondaryBody: getDatesText(dates),
    countdownText: getCountdownText(dates[0]),
    note: ticketType
  };
};

export const mapTheatreVisitToCard = (theatreVisit: ITheatreVisit): ICard => {
  const { theatre, date } = theatreVisit;
  return {
    ...theatreVisit,
    title: getTheatreVisitTitle(theatreVisit),
    subtitle: getTheatreVisitSubtitle(theatreVisit),
    body: moveTheSuffixToPrefix(theatre.name),
    secondaryBody: getDateText(date)
  };
};

export const mapTripLegToCard = (tripLeg: ITripLeg): ICard => {
  const { dates } = tripLeg;
  return {
    ...tripLeg,
    title: getTripTitle(tripLeg),
    subtitle: getTripSubtitle(tripLeg),
    secondaryBody: getTripBody(tripLeg),
    body: getDatesText(dates)
  };
};

export const mapAlbumCardToCard = ({
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
