import { SYMBOL_PHOTO, SYMBOL_VIDEO } from "config";
import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";

const sortCompany = (company: Array<IPerson>): Array<IFriend> =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials > b.initials ? 1 : -1
  );

const getCompanySymbols = (company: Array<IPerson>): Array<ISymbol> =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      opacity: "50%",
      content: { text: initials }
    })
  );

interface IGetSymbols extends I__Company, I__Date, I__Photos, I__Video {}

export const getSymbols = ({
  company,
  date,
  photos,
  video
}: IGetSymbols): Array<ISymbol> => {
  let symbols: Array<ISymbol> = [];
  if (company) symbols.push(...getCompanySymbols(company));
  if (date && isInFuture(date))
    symbols.push({
      opacity: "100%",
      content: { text: daysToGo(date).toString() }
    });
  if (photos) symbols.push(SYMBOL_PHOTO);
  if (video) symbols.push(SYMBOL_VIDEO);
  return symbols;
};
