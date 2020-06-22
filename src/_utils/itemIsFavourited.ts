import { PAGE_SECTIONS } from "_constants";

interface IItemIsFavourited {
  itemToInspect: any;
  pageSectionTitle: IPageSectionDetails;
  favouritedData: Array<any>;
}

export const itemIsFavourited = ({
  itemToInspect,
  pageSectionTitle,
  favouritedData
}: IItemIsFavourited) => {
  let itemIsFavourited = false;

  favouritedData.forEach((dataItem: any) => {
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
