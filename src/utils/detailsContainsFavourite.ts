export const detailsContainsFavourite = (
  panelDetails: Array<IMiniCardPanelDetail>
): boolean => {
  const favouritedDetails = panelDetails.filter(
    ({ favourite }: IMiniCardPanelDetail): boolean => !!favourite
  );
  return favouritedDetails.length > 0;
};
