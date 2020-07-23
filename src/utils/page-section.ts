export const validPageSectionData = ({
  countedListItems,
  gigsAndFestivals,
  recipes,
  theatreVisits,
  trips,
  vinylCards
}: IPageSectionDataTypes): boolean =>
  !(
    (countedListItems && countedListItems.length === 0) ||
    (gigsAndFestivals && gigsAndFestivals.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0) ||
    (theatreVisits && theatreVisits.length === 0) ||
    (trips && trips.length === 0) ||
    (vinylCards && vinylCards.vinyls.length === 0)
  );
