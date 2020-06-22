import { PAGE_SECTION_TEMPLATES } from "@constants";

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
      (id === PAGE_SECTION_TEMPLATES.MUSICIAN &&
        itemToInspect === dataItem.headline) ||
      (id === PAGE_SECTION_TEMPLATES.PLAY && itemToInspect === dataItem.play)
    )
      itemIsFavourited = true;
  });

  return itemIsFavourited;
};
