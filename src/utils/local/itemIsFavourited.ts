import { PAGE_SECTION_TYPES } from "../../constants";

interface IItemIsFavourited {
  itemToInspect: any;
  pageSectionType: IPageSectionType;
  favouritedData: any;
}

export const itemIsFavourited = ({
  itemToInspect,
  pageSectionType,
  favouritedData
}: IItemIsFavourited) => {
  let itemIsFavourited = false;

  favouritedData.map((dataItem: any) => {
    if (
      (pageSectionType === PAGE_SECTION_TYPES.MUSICIAN &&
        itemToInspect === dataItem.headline) ||
      (pageSectionType === PAGE_SECTION_TYPES.PLAY &&
        itemToInspect === dataItem.play)
    )
      itemIsFavourited = true;
  });

  return itemIsFavourited;
};
