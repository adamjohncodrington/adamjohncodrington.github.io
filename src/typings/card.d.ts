interface CardProps extends I__Photos, I_Sort, I__Favourite, I__Video {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  disclaimer?: string;

  headerPhoto?: Photo;
  symbols?: SymbolProps[];
  year: number;
}

interface CardHeaderProps extends CardProps, IDisclosureHeader {}
