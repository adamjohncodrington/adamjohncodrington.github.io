export const pageSectionHasData = ({
  data: { countedListItems, gigs, recipes, theatreVisits, trips, vinylCards }
}: IPageSection): boolean =>
  !(
    (countedListItems && countedListItems.length === 0) ||
    (gigs && gigs.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0) ||
    (theatreVisits && theatreVisits.length === 0) ||
    (trips && trips.length === 0) ||
    (vinylCards && vinylCards.vinyls.length === 0)
  );
