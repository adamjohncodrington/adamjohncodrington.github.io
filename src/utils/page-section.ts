export const pageSectionIsValid = ({
  data: { countedListItems, gigs, recipes, theatreVisits, trips, vinyls }
}: IPageSection): boolean =>
  !(
    (countedListItems && countedListItems.length === 0) ||
    (gigs && gigs.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0) ||
    (theatreVisits && theatreVisits.length === 0) ||
    (trips && trips.length === 0) ||
    (vinyls && vinyls.length === 0)
  );
