import { PAGE_SECTIONS } from "../../constants";

interface IItemIsFavourited {
  itemToInspect: any;
  pageSectionTitle: IPageSectionDetails;
  favouritedData: any;
}

export const itemIsFavourited = ({
  itemToInspect,
  pageSectionTitle,
  favouritedData
}: IItemIsFavourited) => {
  let itemIsFavourited = false;

  favouritedData.map((dataItem: any) => {
    if (
      (pageSectionTitle === PAGE_SECTIONS.MUSICIAN &&
        itemToInspect === dataItem.headline) ||
      (pageSectionTitle === PAGE_SECTIONS.PLAY &&
        itemToInspect === dataItem.play)
    )
      itemIsFavourited = true;
    return null;
  });

  return itemIsFavourited;
};
