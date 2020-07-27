export const validPageSectionData = ({
  miniCards,
  musicEvents,
  recipes,
  theatreVisits,
  tripLegs,
  vinyls
}: IPageSectionDataTypes): boolean =>
  !(
    (miniCards && miniCards.length === 0) ||
    (musicEvents && musicEvents.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0) ||
    (theatreVisits && theatreVisits.length === 0) ||
    (tripLegs && tripLegs.length === 0) ||
    (vinyls && vinyls.length === 0)
  );
