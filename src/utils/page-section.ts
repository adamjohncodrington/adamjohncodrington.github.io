export const validPageSectionData = ({
  miniCards,
  gigsAndFestivals,
  recipes,
  theatreVisits,
  tripLegs,
  vinylCards
}: IPageSectionDataTypes): boolean =>
  !(
    (miniCards && miniCards.length === 0) ||
    (gigsAndFestivals && gigsAndFestivals.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0) ||
    (theatreVisits && theatreVisits.length === 0) ||
    (tripLegs && tripLegs.length === 0) ||
    (vinylCards && vinylCards.vinyls.length === 0)
  );
