import {
  getGigTitle,
  getGigSubtitle,
  getGigMusicians,
  getFestivalTitle,
  getFestivalSubtitle,
  getFestivalMusicians
} from "./get";

export const mapPoleVideosToVideoCards = (
  poleVideos: Array<IPoleVideo>
): Array<IVideoCard> =>
  poleVideos.map(
    ({ date, song: { musician, title }, ...rest }: IPoleVideo): IVideoCard => ({
      ...rest,
      title: musician.name,
      subtitle: title,
      dates: [date]
    })
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
