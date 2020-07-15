export const detailsContainsFavourite = (
  details: Array<ICountedListItemDetail>
): boolean => {
  const favouritedDetails = details.filter(
    ({ favourite }: ICountedListItemDetail): boolean => !!favourite
  );
  return favouritedDetails.length > 0;
};
