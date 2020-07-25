export const detailsContainsFavourite = (
  details: Array<IBasicListItemDetail>
): boolean => {
  const favouritedDetails = details.filter(
    ({ favourite }: IBasicListItemDetail): boolean => !!favourite
  );
  return favouritedDetails.length > 0;
};
