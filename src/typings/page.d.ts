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
  musicEvents?: IMusicEvent[];
  theatreVisits?: ITheatreVisit[];
  tripLegs?: ITripLeg[];
  poleRoutines?: IPoleRoutine[];
  gigVideos?: IGigVideo[];
  festivalVideos?: IFestivalVideo[];
  travelVideos?: ITravelVideo[];
  vinyls?: IAlbum[];
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
  cards?: ICard[];
  miniCards?: IMiniCard[];
  recipes?: IRecipe[];
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
