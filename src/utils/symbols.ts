import { SYMBOL_PHOTO, SYMBOL_VIDEO } from "config";

const sortCompany = (company: Array<IFriend>): Array<IFriend> =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials > b.initials ? 1 : -1
  );

const getCompanySymbols = (company: Array<IFriend>): Array<ISymbol> =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      opacity: "50%",
      content: { text: initials }
    })
  );

interface IGetSymbols extends I__Company, I__Photos, I__Video {}

export const getSymbols = ({
  company,
  photos,
  video
}: IGetSymbols): Array<ISymbol> => {
  let symbols: Array<ISymbol> = [];
  if (company) symbols.push(...getCompanySymbols(company));
  if (photos) symbols.push(SYMBOL_PHOTO);
  if (video) symbols.push(SYMBOL_VIDEO);
  return symbols;
};
