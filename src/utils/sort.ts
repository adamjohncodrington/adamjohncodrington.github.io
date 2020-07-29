const sortCompany = (company: Array<IFriend>): Array<IFriend> =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials > b.initials ? 1 : -1
  );

export const mapCompanyToSymbols = (company: Array<IFriend>): Array<ISymbol> =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      opacity: "50%",
      content: { text: initials }
    })
  );
