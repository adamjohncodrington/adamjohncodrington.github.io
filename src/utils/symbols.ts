import { SYMBOL_PHOTO, SYMBOL_VIDEO, SYMBOL_SIGNED } from "config";
import { COLORS } from "styles";

import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";
import { vinylColorIsSpecial } from "./vinyl";

const { BLACK, GRAY } = COLORS;

const sortCompany = (company: Array<IPerson>): Array<IFriend> =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials > b.initials ? 1 : -1
  );

const getCompanySymbols = (company: Array<IPerson>): Array<ISymbol> =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      background: GRAY,
      content: { text: initials }
    })
  );

interface IGetSymbols
  extends I__Company,
    I__Date,
    I__Signed,
    I__Photos,
    I__Video {
  colorCircle?: { colors: Array<string> };
}

export const getTwoColorDiagonal = (color1: string, color2: string): string =>
  `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`;

const BORDER_HALF_PX_SOLID_GREY: string = "0.5px solid grey";
const BORDER_HALF_PX_SOLID_BLACK: string = "0.5px solid black";

const getVinylColorSymbolBackground = (colors: Array<string>): string =>
  colors.length > 1
    ? getTwoColorDiagonal(colors[0], colors[1])
    : // : colors[0] === COLORS.VINYL.PHOTO
      // ? "red"
      colors[0];

const getVinylColorSymbolBorder = (colors: Array<string>): string =>
  colors[0] === COLORS.CLEAR
    ? BORDER_HALF_PX_SOLID_GREY
    : colors === COLORS.VINYL.PVRIS_AWKOHAWNOH ||
      colors[0] === COLORS.VINYL.PHOTO
    ? BORDER_HALF_PX_SOLID_BLACK
    : "none";

export const getSymbols = ({
  colorCircle,
  company,
  date,
  photos,
  signed,
  video
}: IGetSymbols): Array<ISymbol> => {
  let symbols: Array<ISymbol> = [];

  if (colorCircle) {
    const { colors } = colorCircle;

    if (vinylColorIsSpecial(colors))
      symbols.push({
        background: getVinylColorSymbolBackground(colors),
        border: getVinylColorSymbolBorder(colors),
        borderRadius: "50%",
        svgFill: BLACK,
        content: {}
      });
  }

  if (company) symbols.push(...getCompanySymbols(company));

  if (date && isInFuture(date))
    symbols.push({
      background: "black",
      content: { text: daysToGo(date).toString() }
    });

  if (signed) symbols.push(SYMBOL_SIGNED);
  if (photos) symbols.push(SYMBOL_PHOTO);
  if (video) symbols.push(SYMBOL_VIDEO);

  return symbols;
};
