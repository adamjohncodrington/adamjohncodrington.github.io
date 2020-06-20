import { PAGE_SECTIONS } from "../../constants";

type UnknownTypeDataItem = any;
interface IItemIsFavourited {
  itemToInspect: any;
  pageSectionTitle: IPageSectionDetails;
  favouritedData: Array<UnknownTypeDataItem>;
}

export const itemIsFavourited = ({
  itemToInspect,
  pageSectionTitle,
  favouritedData
}: IItemIsFavourited) => {
  let itemIsFavourited = false;

  favouritedData.forEach((dataItem: UnknownTypeDataItem) => {
    if (
      (pageSectionTitle === PAGE_SECTIONS.MUSICIAN &&
        itemToInspect === dataItem.headline) ||
      (pageSectionTitle === PAGE_SECTIONS.PLAY &&
        itemToInspect === dataItem.play)
    )
      itemIsFavourited = true;
  });

  return itemIsFavourited;
};
