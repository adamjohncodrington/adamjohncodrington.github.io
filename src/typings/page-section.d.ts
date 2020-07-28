interface IPhotoGrid {
  photos: Array<IPhoto>;
  columnCount: number;
}

interface IPageSectionPanelTypes {
  cards?: Array<ICard>;
  miniCards?: Array<IMiniCard>;
  recipes?: Array<IRecipe>;
  photoGrid?: IPhotoGrid;
}

interface IPageSectionDataTypes extends IPageSectionPanelTypes {
  comingSoon?: boolean;
  musicEvents?: Array<IMusicEvent>;
  theatreVisits?: Array<ITheatreVisit>;
  tripLegs?: Array<ITripLeg>;
  poleRoutines?: Array<IPoleRoutine>;
  gigVideos?: Array<IGigVideo>;
  festivalVideos?: Array<IFestivalVideo>;
  travelVideos?: Array<ITravelVideo>;
  vinyls?: Array<IAlbum>;

  festivals?: Array<IFestival>;
  gigs?: Array<IGig>;
}

interface IPageSection extends I__AutoExpand {
  title: string;
  shuffle?: boolean;
  SvgIcon?: ISvgIcon;
  data: IPageSectionDataTypes;
  count?: number;
  starCount?: number;
  hide?: boolean;
}
