import { COLORS } from "styles";

const { BLACK } = COLORS;

export const PHOTO: ISymbol = {
  background: BLACK,
  contents: { icon: "photo" }
};

export const VIDEO: ISymbol = {
  background: BLACK,
  contents: { icon: "video" }
};

export const SIGNED: ISymbol = { background: BLACK, contents: { icon: "pen" } };

export const GIFT: ISymbol = { background: BLACK, contents: { icon: "gift" } };
