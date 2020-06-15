type IPageSectionType = string;
interface INameFavourite {
  name: string;
  favourite?: boolean;
  insignificant?: boolean;
}
interface IFriend extends INameFavourite {
  initials: string;
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

type IInputData =
  | IActor
  | IFriend
  | IMusician
  | IPlay
  | IFestival
  | IMusicVenue
  | IAttraction
  | ITheatreVenue
  | ILocationItem;
