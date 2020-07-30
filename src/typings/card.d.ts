interface ICard extends I__Photos, I_Sort, I__Favourite, I__Video {
  symbols?: Array<ISymbol>;

  dates?: Array<Date>;
  year?: number;

  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  disclaimer?: string;
  headerPhoto?: IPhoto;
}

interface ICardHeader extends ICard, IDisclosureHeader {}
