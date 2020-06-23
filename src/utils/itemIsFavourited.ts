interface IItemIsFavourited {
  itemToInspect: any;
  favouritedData: Array<any>;
}

export const itemIsFavourited = ({
  itemToInspect,
  favouritedData
}: IItemIsFavourited) => {
  let itemIsFavourited = false;

  favouritedData.forEach((dataItem: any) => {
    if (itemToInspect === dataItem.headline || itemToInspect === dataItem.play)
      itemIsFavourited = true;
  });

  return itemIsFavourited;
};
