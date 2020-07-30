import { COLORS } from "styles";

import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";
import { vinylColorIsSpecial } from "./vinyl";

const { BLACK, GRAY_MEDIUM, GRAY_MEDIUM_LIGHT } = COLORS;

const SYMBOL_PHOTO: ISymbol = {
  background: BLACK,
  contents: { icon: "photo" }
};

const SYMBOL_VIDEO: ISymbol = {
  background: BLACK,
  contents: { icon: "video" }
};

const SYMBOL_SIGNED: ISymbol = {
  background: BLACK,
  contents: { icon: "pen" }
};

const SYMBOL_GIFT: ISymbol = {
  background: BLACK,
  contents: { icon: "gift" }
};

const sortCompany = (company: Array<IPerson>): Array<IFriend> =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials > b.initials ? 1 : -1
  );

const getCompanySymbols = (company: Array<IPerson>): Array<ISymbol> =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      background: GRAY_MEDIUM,
      contents: { text: initials }
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
  vinyl?: IVinyl;
}

export const getSymbols = ({
  vinyl,
  company,
  date,
  photos,
  signed,
  gift,
  video
}: IGetSymbols): Array<ISymbol> => {
  let symbols: Array<ISymbol> = [];

  if (vinyl) {
    const { colors } = vinyl;

    if (vinylColorIsSpecial(colors))
      symbols.push({
        background: getVinylColorSymbolBackground(colors),
        border: getVinylColorSymbolBorder(colors),
        borderRadius: "50%",
        svgFill: BLACK,
        contents: {}
      });
  }

  if (company) symbols.push(...getCompanySymbols(company));

  if (gift) symbols.push(SYMBOL_GIFT);

  if (date && isInFuture(date))
    symbols.push({
      background: "black",
      contents: { text: daysToGo(date).toString() }
    });

  if (signed) symbols.push(SYMBOL_SIGNED);
  if (photos) symbols.push(SYMBOL_PHOTO);
  if (video) symbols.push(SYMBOL_VIDEO);

  return symbols;
};
