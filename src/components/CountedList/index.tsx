import React from "react";

import { CountedItem } from "../CountedItem";
import { PageSectionList } from "../PageSectionList";

interface ICountedList {
  countedItems: Array<ICountedItem>;
}

export const CountedList: React.FC<ICountedList> = ({ countedItems }) => (
  <PageSectionList>
    {countedItems.map((countedListItem: ICountedItem, index: number) => (
      <CountedItem key={index} {...countedListItem} />
    ))}
  </PageSectionList>
);
