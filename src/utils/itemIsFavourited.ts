import { PAGE_SECTION_IDS } from "@constants";

interface IItemIsFavourited {
  itemToInspect: any;
  id: IPageSectionDetails;
  favouritedData: Array<any>;
}

export const itemIsFavourited = ({
  itemToInspect,
  id,
  favouritedData
}: IItemIsFavourited) => {
  let itemIsFavourited = false;

  favouritedData.forEach((dataItem: any) => {
    if (
      (id === PAGE_SECTION_IDS.MUSICIAN &&
        itemToInspect === dataItem.headline) ||
      (id === PAGE_SECTION_IDS.PLAY && itemToInspect === dataItem.play)
    )
      itemIsFavourited = true;
  });

  return itemIsFavourited;
};
