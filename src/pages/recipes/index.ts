import { DATA } from "./data";

const SECTIONS_RECIPE_GROUPS: Array<IPageSection> = DATA.CATEGORISED.map(
  ({ category, recipes }: IRecipeGroup) => ({
    title: category,
    data: { recipeCards: recipes },
    isStatic: true
  })
);

const SECTION_COMING_SOON: IPageSection = {
  title: "Coming Soon",
  data: { countedItems: DATA.COMING_SOON }
};

const sections: Array<IPageSection> = [
  ...SECTIONS_RECIPE_GROUPS,
  SECTION_COMING_SOON
];

export const PAGE_RECIPES: IPage = { sections };
