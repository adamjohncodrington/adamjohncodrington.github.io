import { MUSICIANS as musicians } from "@constants";
import { VINYL as DATA } from "data-raw";
import { getItemCounts } from "utils";

export const MUSICIANS: Array<IMiniCard> = Object.values(musicians).map(
  (musician: IMusician): IMiniCard => {
    const { name, previousStageName } = musician;
    return {
      text: name,
      secondaryText: previousStageName && previousStageName.name,
      ...getItemCounts({
        item: { musician },
        data: { vinyls: DATA.COLLECTION }
      })
    };
  }
);
