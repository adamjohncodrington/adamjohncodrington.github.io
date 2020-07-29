interface ICard extends I__Photos, I__Favourite, I__Video {
  symbols?: Array<ISymbol>;

  dates?: Array<Date>;
  year?: number;

  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  disclaimer?: string;
  headerPhoto?: IPhotoLink;
}

interface ICardHeader extends ICard, IDisclosureHeader {}
