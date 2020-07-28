import { UNICODE } from "@constants";

export const FOLD_IN_FLOUR_MIX: string =
  "in small batches, sieve the flour mix into the mixture and gently fold in until there are no more flour pockets";

export const LEAVE_TO_COOL_BEFORE_REMOVING_FROM_LOAF_TIN: string =
  "leave to cool before removing from loaf tin";

export const MAKE_FLAX_EGG: string =
  "make flax egg by stirring ground flax seeds with water and leaving to rest for at least 5 minutes until it thickens";

interface IBakeForAbout {
  minutes: number;
  skewer?: boolean;
  wellRisen?: boolean;
  continueToCookOutsideOven?: boolean;
}

export const bakeForAbout = ({
  minutes,
  skewer,
  wellRisen,
  continueToCookOutsideOven
}: IBakeForAbout): string => {
  const defaultText = `bake for about ${minutes} minutes`;
  const additionalText =
    (skewer && "just until skewer runs clean") ||
    (continueToCookOutsideOven &&
      "they will continue cooking out of the oven") ||
    (wellRisen && "until well-risen and slightly golden");

  if (!additionalText) return defaultText;
  return `${defaultText} (${additionalText})`;
};

interface IPreheatOven {
  degreesCelcius: number;
  bakingTray?: boolean;
}

export const preheatOven = ({
  degreesCelcius,
  bakingTray
}: IPreheatOven): string => {
  const ovenTemperature = degreesCelcius + UNICODE.DEGREES_CELCIUS;

  if (!bakingTray) return "preheat oven to " + ovenTemperature;
  return "preheat baking tray in oven at " + ovenTemperature;
};

interface ITransferToLoafTin {
  sunkenCentre?: boolean;
}

export const transferToLoafTin = ({
  sunkenCentre
}: ITransferToLoafTin): string => {
  const defaultText = "transfer mixture to non-stick loaf tin";
  const additionalText =
    sunkenCentre &&
    "create slightly sunken centre to help the cake rise more evenly";

  if (!additionalText) return defaultText;
  return `${defaultText} (${additionalText})`;
};
