import { DATA } from "./data";

const SECTIONS_RECIPE_GROUPS: Array<IPageSection> = DATA.CATEGORISED.map(
  ({ title, recipes }: IRecipeGroup): IPageSection => ({
    title: title,
    data: { recipeCards: recipes },
    staticAlways: true
  })
);

const SECTION_COMING_SOON: IPageSection = {
  title: "Coming Soon",
  autoExpandAlways: true,
  data: { countedListItems: DATA.COMING_SOON }
};

export const sections: Array<IPageSection> = [
  ...SECTIONS_RECIPE_GROUPS,
  SECTION_COMING_SOON
];
