import { COLORS } from "_styles";

interface IDiets {
  VEGAN: IRecipeDiet;
  VEGETARIAN: IRecipeDiet;
}

export const DIETS: IDiets = {
  VEGAN: { abbreviation: "Ve", color: COLORS.darkGreen },
  VEGETARIAN: { abbreviation: "V", color: COLORS.green }
};
