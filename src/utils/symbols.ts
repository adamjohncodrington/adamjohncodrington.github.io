import {
  COLORS,
  getTwoColorDiagonal,
  BORDER_HALF_PX_SOLID_GREY,
  getBackgoundImageUrl
} from "styles";
import { SYMBOLS } from "@constants";

import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";
import { vinylColorIsSpecial } from "./vinyl";

const { BLACK, GRAY_DARK } = COLORS;

const sortCompany = (company: IPerson[]): Friend[] =>
  company.sort((a: Friend, b: Friend): number =>
    a.initials.localeCompare(b.initials)
  );

const getCompanySymbols = (company: IPerson[]): SymbolProps[] =>
  sortCompany(company).map(
    ({ initials }: Friend): SymbolProps => ({
      background: GRAY_DARK,
      contents: { text: initials }
    })
  );

const getVinylSymbolBackground = ({
  colors,
  photo: { discPhoto }
}: IVinylExtraCopy): string => {
  const photoBackground: string | undefined = !!discPhoto
    ? getBackgoundImageUrl(discPhoto)
    : undefined;

  return !!photoBackground
    ? photoBackground
    : colors.length > 1
    ? getTwoColorDiagonal(colors[0], colors[1])
    : colors[0];
};

interface IGetSymbols
  extends I__Company,
    I__Date,
    I__Signed,
    I__Photos,
    I__Gift,
    I__Video {
  poleCategory?: IPoleCategory;
  vinyl?: Vinyl;
}

// const generateVinylColorSymbol = ()

const addVinylColorSymbol = (
  colors: string[],
  vinyl: IVinylExtraCopy,
  symbols: SymbolProps[]
): void => {
  if (vinylColorIsSpecial(colors))
    symbols.push({
      background: getVinylSymbolBackground(vinyl),
      border: colors[0] === COLORS.CLEAR ? BORDER_HALF_PX_SOLID_GREY : "none",
      borderRadius: "50%",
      svgFill: BLACK,
      contents: {}
    });
};

export const getSymbols = ({
  vinyl,
  company,
  date,
  photos,
  signed,
  gift,
  poleCategory,
  video
}: IGetSymbols): SymbolProps[] => {
  let symbols: SymbolProps[] = [];

  if (vinyl) {
    const { colors, extraCopy } = vinyl;

    addVinylColorSymbol(colors, vinyl, symbols);
    if (extraCopy) addVinylColorSymbol(extraCopy.colors, extraCopy, symbols);
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
