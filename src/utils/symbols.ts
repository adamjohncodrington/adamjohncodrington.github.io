import { SYMBOLS } from "@constants";
import { COLORS, getBackgoundImageUrl, getTwoColorDiagonal } from "styles";
import { Person, Gift, VinylAppearance } from "types";

import { isInFuture } from "./basic";
import { daysToGo } from "./daysToGo";

const { GRAY_DARK } = COLORS;

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

type GetSymbols = I__Date &
  I__Signed &
  I__Photos &
  I__Video & {
    company?: Person[];
    gift?: Gift;
    poleCategory?: IPoleCategory;
    vinylAppearance?: VinylAppearance;
  };

export const getSymbols = ({
  vinylAppearance,
  company,
  date,
  photos,
  signed,
  gift,
  poleCategory,
  video
}: GetSymbols): SymbolProps[] => {
  let symbols: SymbolProps[] = [];

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

  if (vinylAppearance) {
    const { color, inches, sides } = vinylAppearance;

    if (color !== COLORS.BLACK || sides > 2) {
      const symbolProps = {
        background:
          typeof color === "string"
            ? color
            : Array.isArray(color)
            ? getTwoColorDiagonal(color)
            : getBackgoundImageUrl(color.photo),
        contents: {},
        borderRadius: "50%",
        sizeProportion: inches / 12
      };

      symbols.push({
        ...symbolProps,
        subSymbol: sides > 2 ? symbolProps : undefined
      });
    }
  }

  return symbols;
};
