export const detailsContainsFavourite = (
  details: IMiniCardPanelDetail[]
): boolean => {
  const favouritedDetails = details.filter(
    ({ favourite }: IMiniCardPanelDetail): boolean => !!favourite
  );
  return favouritedDetails.length > 0;
};
