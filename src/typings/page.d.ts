interface IPhotoGrid extends I_Photos {}

interface IPage extends I__Hide {
  title: string;
  path: string;
  SvgIcon: ISvgIcon;
  sections: IPageSection[];
  count?: number;
  color?: ColorValue;
}

interface IPageSectionItemDataTypes {
  musicEvents?: Array<IMusicEvent>;
  theatreVisits?: Array<ITheatreVisit>;
  tripLegs?: Array<ITripLeg>;
  poleRoutines?: IPoleRoutine[];
  gigVideos?: Array<IGigVideo>;
  festivalVideos?: Array<IFestivalVideo>;
  travelVideos?: Array<ITravelVideo>;
  vinyls?: Array<IAlbum>;
  festivals?: IFestival[];
  gigs?: IGig[];
}

interface ICosts {
  totalCost: string;
  unitCost: string;
  unit: string;
}

interface IPageSectionPanelDataTypes {
  comingSoon?: boolean;
  costs?: ICosts;
  cards?: Array<ICard>;
  miniCards?: Array<IMiniCard>;
  recipes?: Array<IRecipe>;
  photoGrid?: IPhotoGrid;
}

interface IPageSection extends I__AutoExpand, I__Hide {
  title: string;
  shuffle?: boolean;
  SvgIcon?: ISvgIcon;
  data: IPageSectionPanelDataTypes;
  count?: number;
  starCount?: number;
}
