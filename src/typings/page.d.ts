interface IPhotoGrid extends I_Photos {
  columnCount?: number;
}

interface IPage extends I__Hide {
  title: string;
  path: string;
  SvgIcon: ISvgIcon;
  sections: PageSectionProps[];
  count?: number;
  color?: ColorValue;
}

interface IPageSectionItemDataTypes {
  musicEvents?: MusicEvent[];
  theatreVisits?: TheatreVisit[];
  tripLegs?: TripLeg[];
  travelVideos?: ITravelVideo[];
  vinyls?: IAlbum[];
  festivals?: Festival[];
  gigs?: Gig[];
}

interface ICosts {
  totalCost: string;
  unitCost: string;
  unit: string;
}

interface IPageSectionPanelDataTypes {
  comingSoon?: boolean;
  costs?: ICosts;
  cards?: CardProps[];
  miniCards?: MiniCardProps[];
  recipes?: IRecipe[];
  photoGrid?: IPhotoGrid;
}

interface PageSectionProps extends I__AutoExpand, I__Hide {
  title: string;
  shuffle?: boolean;
  SvgIcon?: ISvgIcon;
  data: IPageSectionPanelDataTypes;
  count?: number;
  starCount?: number;
}
