import { SYMBOLS } from "@constants";
import { COLORS, BORDER_HALF_PX_SOLID_GREY } from "styles";
import { Person, Gift, Vinyl, VinylColor } from "types";

import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";
import { vinylColorIsSpecial } from "./vinyl";

const { BLACK, GRAY_DARK } = COLORS;

const sortCompany = (company: Person[]): Person[] =>
  company.sort((a: Person, b: Person): number =>
    a.initials.localeCompare(b.initials)
  );

const getCompanySymbols = (company: Person[]): SymbolProps[] =>
  sortCompany(company).map(
    ({ initials }: Person): SymbolProps => ({
      background: GRAY_DARK,
      contents: { text: initials }
    })
  );

const getVinylSymbolBackground = (color: VinylColor): string => {
  return "";
  // color.photo ?
  // const photoBackground: string | undefined = color.photo ?
  //   ? getBackgoundImageUrl(discPhoto)
  //   : undefined;
  // return !!photoBackground
  //   ? photoBackground
  //   : color.length > 1
  //   ? getTwoColorDiagonal(color[0], color[1])
  //   : color;
};

type GetSymbols = I__Date &
  I__Signed &
  I__Photos &
  I__Video & {
    company?: Person[];
    gift?: Gift;
    poleCategory?: IPoleCategory;
    vinyl?: Vinyl;
  };

const getVinylColorSymbol = (color: VinylColor): SymbolProps => ({
  background: getVinylSymbolBackground(color),
  border: color === COLORS.CLEAR ? BORDER_HALF_PX_SOLID_GREY : "none",
  borderRadius: "50%",
  svgFill: BLACK,
  contents: {}
});

export const getSymbols = ({
  vinyl,
  company,
  date,
  photos,
  signed,
  gift,
  poleCategory,
  video
}: GetSymbols): SymbolProps[] => {
  let symbols: SymbolProps[] = [];

  if (vinyl) {
    const { color } = vinyl;
    if (vinylColorIsSpecial(color)) symbols.push(getVinylColorSymbol(color));
  }

  if (company) symbols.push(...getCompanySymbols(company));

  if (gift) symbols.push(SYMBOLS.GIFT);

  if (date && isInFuture(date))
    symbols.push({
      background: "black",
      contents: { text: daysToGo(date).toString() }
    });

  if (signed) symbols.push(SYMBOLS.SIGNED);

  if (poleCategory) {
    if (poleCategory === "quarantine") symbols.push(SYMBOLS.HOME);
    if (poleCategory === "exotic-class" || poleCategory === "exotic-improv")
      symbols.push(SYMBOLS.EXOTIC);
    if (
      poleCategory === "contemporary-class" ||
      poleCategory === "contemporary-improv"
    )
      symbols.push(SYMBOLS.CONTEMPORARY);
    if (poleCategory === "showcase") symbols.push(SYMBOLS.STARS);
    if (poleCategory === "rock") symbols.push(SYMBOLS.GUITAR);
    if (poleCategory === "tricks") symbols.push(SYMBOLS.TRICKS);
  }

  if (photos) symbols.push(SYMBOLS.PHOTO);
  if (video) symbols.push(SYMBOLS.VIDEO);

  return symbols;
};
