interface IPreCard extends I_Company, I__Favourite {
  hideSubtitle?: boolean;
  photos?: Array<IPhoto>;

  hideCompanySymbols?: boolean;
  hideBody?: boolean;
  hideSecondaryBody?: boolean;
  hideFavouriteIcon?: boolean;
  hidePhotoSymbol?: boolean;
  hideVideoSymbol?: boolean;
}

interface ICard extends IPreCard, I__Video {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
  headerPhoto?: IPhotoLink;
}

interface ICardHeader extends ICard, IDisclosureHeader {}
