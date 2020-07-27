export const detailsContainsFavourite = (
  details: Array<IMiniCardDetail>
): boolean => {
  const favouritedDetails = details.filter(
    ({ favourite }: IMiniCardDetail): boolean => !!favourite
  );
  return favouritedDetails.length > 0;
};
