import { COLORS } from "styles";

interface IDiets {
  VEGAN: IRecipeDiet;
  VEGETARIAN: IRecipeDiet;
}

export const DIETS: IDiets = {
  VEGAN: { abbreviation: "Ve", color: COLORS.camarone },
  VEGETARIAN: { abbreviation: "V", color: COLORS.japaneseLaurel }
};
