interface ICard extends I__Photos, I_Sort, I__Favourite, I__Video {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  disclaimer?: string;

  headerPhoto?: IPhoto;
  symbols?: SymbolProps[];
  year: number;
}

interface CardHeaderProps extends ICard, IDisclosureHeader {}
