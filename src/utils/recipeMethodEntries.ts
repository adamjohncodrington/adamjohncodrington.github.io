import { UNICODE } from "@constants";

interface IBakeForAbout {
  minutes: number;
  skewer?: boolean;
  wellRisen?: boolean;
}
interface IPreheatOven {
  degreesCelcius: number;
  bakingTray?: boolean;
}
interface ITransferToLoafTin {
  sunkenCentre?: boolean;
}
interface IRecipeMethodEntries {
  FOLD_IN_FLOUR_MIX: string;
  LEAVE_TO_COOL_BEFORE_REMOVING_FROM_LOAF_TIN: string;
  MAKE_FLAX_EGG: string;
  bakeForAbout: (params: IBakeForAbout) => string;
  preheatOven: (params: IPreheatOven) => string;
  transferToLoafTin: (params: ITransferToLoafTin) => string;
}

export const recipeMethodEntries = (): IRecipeMethodEntries => {
  const FOLD_IN_FLOUR_MIX: string =
    "in small batches, sieve the flour mix into the mixture and gently fold in until there are no more flour pockets";
  const LEAVE_TO_COOL_BEFORE_REMOVING_FROM_LOAF_TIN: string =
    "leave to cool before removing from loaf tin";
  const MAKE_FLAX_EGG: string =
    "make flax egg by stirring ground flax seeds with water and leaving to rest for at least 5 minutes until it thickens";

  const bakeForAbout = ({
    minutes,
    skewer = false,
    wellRisen = false
  }: IBakeForAbout): string => {
    const defaultText = `bake for about ${minutes} minutes`;
    const additionalText =
      (skewer && "just until skewer runs clean") ||
      (wellRisen && "until well-risen and slightly golden");

    if (!additionalText) return defaultText;
    return `${defaultText} (${additionalText})`;
  };

  const preheatOven = ({
    degreesCelcius,
    bakingTray = false
  }: IPreheatOven): string => {
    const ovenTemperature = degreesCelcius + UNICODE.DEGREES_CELCIUS;

    if (!bakingTray) return "preheat oven to " + ovenTemperature;
    return "preheat baking tray in oven at " + ovenTemperature;
  };

  const transferToLoafTin = ({
    sunkenCentre = false
  }: ITransferToLoafTin): string => {
    const defaultText = "transfer mixture to non-stick loaf tin";
    const additionalText =
      sunkenCentre &&
      "create slightly sunken centre to help the cake rise more evenly";

    if (!additionalText) return defaultText;
    return `${defaultText} (${additionalText})`;
  };

  return {
    FOLD_IN_FLOUR_MIX,
    LEAVE_TO_COOL_BEFORE_REMOVING_FROM_LOAF_TIN,
    MAKE_FLAX_EGG,
    bakeForAbout,
    preheatOven,
    transferToLoafTin
  };
};
