export const detailsContainsFavourite = (
  details: MiniCardPanelDetailProps[]
): boolean => {
  const favouritedDetails = details.filter(
    ({ favourite }: MiniCardPanelDetailProps): boolean => !!favourite
  );
  return favouritedDetails.length > 0;
};
