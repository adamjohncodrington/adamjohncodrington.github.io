import { MUSICIANS as musicians } from "@constants";
import { VINYL as DATA } from "data-raw";
import { getItemCounts } from "utils";

// export const MUSICIANS: Array<IMiniCard> = Object.values(musicians).map(
//   (musician: IMusician): IMiniCard => {
//     const { name, previousStageName } = musician;
//     return {
//       text: name,
//       secondaryText: previousStageName && previousStageName.name,
//       ...getItemCounts({
//         item: { musician },
//         data: { vinyls: DATA }
//       })
//     };
//   }
// );

export const MUSICIANS: Array<IMiniCard> = DATA.COLLECTION.map(
  ({ musician: { name } }: IVinyl): IMiniCard => ({
    text: name,
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);
