interface IPageSectionPanelTypes {
  cards?: Array<ICard>;
  miniCards?: Array<IMiniCard>;
  recipes?: Array<IRecipe>;
}

interface IPageSectionDataTypes extends IPageSectionPanelTypes {
  comingSoon?: boolean;
  photoGrid?: { photos: Array<IPhoto>; columnCount: number };
  musicEvents?: Array<IMusicEvent>;
  theatreVisits?: Array<ITheatreVisit>;
  tripLegs?: Array<ITripLeg>;
  poleRoutines?: Array<IPoleRoutine>;
  videoCards?: Array<IVideoCard>;
  vinyls?: Array<IAlbum>;

  festivals?: Array<IFestival>;
  gigs?: Array<IGig>;
}

interface IPageSection extends I__AutoExpand {
  title: string;
  SvgIcon?: ISvgIcon;
  data: IPageSectionDataTypes;
  count?: number;
  starCount?: number;
  hide?: boolean;
}
