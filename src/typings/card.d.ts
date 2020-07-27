interface ICardAll extends I_Company, I__Favourite {
  hideSubtitle?: boolean;
  photos?: Array<IPhoto>;
  video?: IVideo;

  hideCompanySymbols?: boolean;
  hideBody?: boolean;
  hideSecondaryBody?: boolean;
  hideFavouriteIcon?: boolean;
  hidePhotosIcon?: boolean;
  hideVideoIcon?: boolean;
}

interface ICard extends ICardAll {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
  headerPhoto?: IPhotoLink;
}

interface ICardHeader extends ICard, IDisclosureHeader {}
