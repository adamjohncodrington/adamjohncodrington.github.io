import { SYMBOL_PHOTO, SYMBOL_VIDEO, SYMBOL_SIGNED } from "config";
import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";

const sortCompany = (company: Array<IPerson>): Array<IFriend> =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials > b.initials ? 1 : -1
  );

const getCompanySymbols = (company: Array<IPerson>): Array<ISymbol> =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      color: "grey",
      content: { text: initials }
    })
  );

interface IGetSymbols
  extends I__Company,
    I__Date,
    I__Signed,
    I__Photos,
    I__Video {
  vinyl?: IColorOptions;
}

export const getSymbols = ({
  company,
  date,
  photos,
  signed,
  vinyl,
  video
}: IGetSymbols): Array<ISymbol> => {
  let symbols: Array<ISymbol> = [];
  if (vinyl && vinyl !== "black")
    symbols.push({ color: vinyl, content: { isVinyl: true } });
  if (company) symbols.push(...getCompanySymbols(company));
  if (date && isInFuture(date))
    symbols.push({
      color: "black",
      content: { text: daysToGo(date).toString() }
    });
  if (signed) symbols.push(SYMBOL_SIGNED);
  if (photos) symbols.push(SYMBOL_PHOTO);
  if (video) symbols.push(SYMBOL_VIDEO);

  return symbols;
};
