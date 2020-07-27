export const detailsContainsFavourite = (
  details: Array<IMiniCardPanelItem>
): boolean => {
  const favouritedDetails = details.filter(
    ({ favourite }: IMiniCardPanelItem): boolean => !!favourite
  );
  return favouritedDetails.length > 0;
};
