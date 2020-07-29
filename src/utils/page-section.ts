export const validPageSectionData = ({
  cards,
  miniCards,
  musicEvents,
  recipes,
  theatreVisits,
  tripLegs,
  vinyls
}: IPageSectionPanelTypes): boolean =>
  !(
    (cards && cards.length === 0) ||
    (miniCards && miniCards.length === 0) ||
    (musicEvents && musicEvents.length === 0) ||
    (recipes &&
      recipes.filter((item: IRecipe): boolean => !item.hide).length === 0) ||
    (theatreVisits && theatreVisits.length === 0) ||
    (tripLegs && tripLegs.length === 0) ||
    (vinyls && vinyls.length === 0)
  );
