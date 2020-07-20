interface IDiets {
  VEGAN: IRecipeDiet;
  VEGETARIAN: IRecipeDiet;
}

export const DIETS: IDiets = {
  VEGAN: { abbreviation: "Ve" },
  VEGETARIAN: { abbreviation: "V" }
};
