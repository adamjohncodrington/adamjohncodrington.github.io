import { COLORS } from "styles";

import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";
import { vinylColorIsSpecial } from "./vinyl";

const { BLACK, GRAY_MEDIUM, GRAY_MEDIUM_LIGHT } = COLORS;

const SYMBOL_PHOTO: ISymbol = {
  background: BLACK,
  content: { icon: "photo" }
};

const SYMBOL_VIDEO: ISymbol = {
  background: BLACK,
  content: { icon: "video" }
};

const SYMBOL_SIGNED: ISymbol = {
  background: BLACK,
  content: { icon: "pen" }
};

const SYMBOL_GIFT: ISymbol = {
  background: BLACK,
  content: { icon: "gift" }
};

const sortCompany = (company: Array<IPerson>): Array<IFriend> =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials > b.initials ? 1 : -1
  );

const getCompanySymbols = (company: Array<IPerson>): Array<ISymbol> =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      background: GRAY_MEDIUM,
      content: { text: initials }
    })
  );

export const getTwoColorDiagonal = (color1: string, color2: string): string =>
  `linear-gradient(to bottom right, ${color1} 50%, ${color2} 50%)`;

//TODO: these should not live here!!!
const BORDER_HALF_PX_SOLID_GREY: string = `0.5px solid ${GRAY_MEDIUM_LIGHT}`;

const getVinylColorSymbolBackground = (colors: Array<string>): string =>
  colors.length > 1
    ? getTwoColorDiagonal(colors[0], colors[1])
    : colors[0] === COLORS.VINYL.PHOTO
    ? "black"
    : colors[0];

const getVinylColorSymbolBorder = (colors: Array<string>): string =>
  colors[0] === COLORS.CLEAR
    ? BORDER_HALF_PX_SOLID_GREY
    : // : colors === COLORS.VINYL.PVRIS_AWKOHAWNOH
      // ? BORDER_HALF_PX_SOLID_BLACK
      "none";

interface IGetSymbols
  extends I__Company,
    I__Date,
    I__Signed,
    I__Photos,
    I__Gift,
    I__Video {
  colorCircle?: { colors: Array<string> };
}

export const getSymbols = ({
  colorCircle,
  company,
  date,
  photos,
  signed,
  gift,
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

  if (gift) symbols.push(SYMBOL_GIFT);

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
