interface IPhotoGrid {
  photos: Array<IPhoto>;
  columnCount: number;
}

interface IPageSectionDataTypes {
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

interface IPageSectionPanelTypes {
  comingSoon?: boolean;
  cards?: Array<ICard>;
  miniCards?: Array<IMiniCard>;
  recipes?: Array<IRecipe>;
  photoGrid?: IPhotoGrid;
}

interface IPageSection extends I__AutoExpand, I__Hide {
  title: string;
  shuffle?: boolean;
  SvgIcon?: ISvgIcon;
  panelData: IPageSectionPanelTypes;
  count?: number;
  starCount?: number;
}
