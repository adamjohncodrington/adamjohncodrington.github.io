import {
  getGigTitle,
  getGigSubtitle,
  getGigMusicians,
  getFestivalTitle,
  getFestivalSubtitle,
  getFestivalMusicians,
  getTheatreVisitTitle,
  getTripTitle,
  getTripBody
} from "./get";
import { moveTheSuffixToPrefix, getDatesText, getDateText } from "./basic";
import { getCountdownText } from "./getCountdownText";
import { getMusicianStageNameAtTime } from "./musician";
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

export const mapGigsToGigsAndFestivals = (
  gigs: Array<IGig>
): Array<IGigOrFestival> =>
  gigs.map(
    (gig: IGig): IGigOrFestival => ({
      ...gig,
      gig,
      dates: [gig.date],
      title: getGigTitle(gig),
      subtitle: getGigSubtitle(gig),
      musicians: getGigMusicians(gig)
    })
  );

export const mapFestivalsToGigsAndFestivals = (
  festivals: Array<IFestival>
): Array<IGigOrFestival> =>
  festivals.map(
    (festival: IFestival): IGigOrFestival => ({
      ...festival,
      festival,
      title: getFestivalTitle(festival),
      subtitle: getFestivalSubtitle(festival),
      musicians: getFestivalMusicians(festival)
    })
  );

export const mapGigOrFestivalToCard = (
  gigOrFestival: IGigOrFestival
): ICard => {
  const { venue, dates, ticketType } = gigOrFestival;
  return {
    ...gigOrFestival,
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
    // subtitle={getTheatreVisitSubtitle(theatreVisit)}
    body: moveTheSuffixToPrefix(theatre.name),
    secondaryBody: getDateText(date)
  };
};

export const mapTripLegToCard = (tripLeg: ITripLeg): ICard => {
  const { dates } = tripLeg;
  return {
    ...tripLeg,
    title: getTripTitle(tripLeg),
    // subtitle={getTripSubtitle(trip)}
    secondaryBody: getTripBody(tripLeg),
    body: getDatesText(dates)
  };
};

export const mapVinylCardToCard = ({
  title,
  musician,
  year,
  artwork,
  hideYear,
  appleMusicId
}: IVinylCard): ICard => {
  return {
    title,
    subtitle: moveTheSuffixToPrefix(
      getMusicianStageNameAtTime({ musician, year })
    ),
    body: hideYear ? undefined : year.toString(),
    company: [],
    headerPhoto: {
      ...artwork,
      href: "https://music.apple.com/gb/album/" + appleMusicId
    }
  };
};

export const mapMethodToListItems = (
  method: Array<string>
): Array<IListItemWithPaddingTopFlag> =>
  method.map(
    (item: string): IListItemWithPaddingTopFlag => ({
      text: item,
      addPaddingTop: false
    })
  );

export const mapServeWithToListItems = (
  serveWith: Array<Array<IRecipeIngredient>>
): Array<IListItemWithPaddingTopFlag> => {
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
    (lineOptions: Array<IRecipeIngredient>): IListItemWithPaddingTopFlag => ({
      text: getServeWithListItem(lineOptions),
      addPaddingTop: false
    })
  );
};

export const mapIngredientsToListItems = (
  ingredientsGroups: Array<Array<IRecipeIngredient>>
): Array<IListItemWithPaddingTopFlag> => {
  let ingredientsWithPaddingFlags: Array<IListItemWithPaddingTopFlag> = [];

  ingredientsGroups.forEach(
    (ingredientsGroup: Array<IRecipeIngredient>, INDEX_HIGH: number) => {
      ingredientsGroup.forEach(
        (ingredient: IRecipeIngredient, INDEX_LOW: number) => {
          ingredientsWithPaddingFlags.push({
            text: generateIngredientListItem(ingredient),
            addPaddingTop: INDEX_HIGH !== 0 && INDEX_LOW === 0
          });
        }
      );
    }
  );

  return ingredientsWithPaddingFlags;
};
