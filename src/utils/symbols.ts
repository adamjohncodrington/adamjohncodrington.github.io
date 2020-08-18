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

const { BLACK, GRAY_MEDIUM } = COLORS;

const sortCompany = (company: IPerson[]): IFriend[] =>
  company.sort((a: IFriend, b: IFriend): number =>
    a.initials.localeCompare(b.initials)
  );

const getCompanySymbols = (company: IPerson[]): ISymbol[] =>
  sortCompany(company).map(
    ({ initials }: IFriend): ISymbol => ({
      background: GRAY_MEDIUM,
      contents: { text: initials }
    })
  );

const getVinylSymbolBackground = ({
  colors,
  photo: { discPhoto }
}: IVinyl): string => {
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
  vinyl?: IVinyl;
}

export const getSymbols = ({
  vinyl,
  company,
  date,
  photos,
  signed,
  gift,
  poleCategory,
  video
}: IGetSymbols): ISymbol[] => {
  let symbols: ISymbol[] = [];

  if (vinyl) {
    const { colors } = vinyl;

    if (vinylColorIsSpecial(colors))
      symbols.push({
        background: getVinylSymbolBackground(vinyl),
        border: colors[0] === COLORS.CLEAR ? BORDER_HALF_PX_SOLID_GREY : "none",
        borderRadius: "50%",
        svgFill: BLACK,
        contents: {}
      });
  }

  if (company) symbols.push(...getCompanySymbols(company));

  if (gift) symbols.push(SYMBOLS.GIFT);

  if (date && isInFuture(date))
    symbols.push({
      background: "black",
      contents: { text: daysToGo(date).toString() }
    });

  if (signed) symbols.push(SYMBOLS.SIGNED);
  if (photos) symbols.push(SYMBOLS.PHOTO);
  if (video) symbols.push(SYMBOLS.VIDEO);

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

  return symbols;
};
