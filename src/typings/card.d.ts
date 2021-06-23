interface CardProps extends I_Sort, I__Favourite, I__Video {
  title: string;
  subtitle?: string;
  body?: string;
  photos?: Photo[];

  secondaryBody?: string;
  disclaimer?: string;

  headerPhoto?: Photo;
  symbols?: SymbolProps[];
  year: number;
}

type CardHeaderProps = CardProps & DisclosureHeader;
