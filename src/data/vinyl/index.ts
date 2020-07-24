import * as vinyls_2005_2008 from "./vinyls-2005-2008";
import * as vinyls_2009_2012 from "./vinyls-2009-2012";
import * as vinyls_2013_2016 from "./vinyls-2013-2016";
import * as vinyls_2017_2019 from "./vinyls-2017-2019";
import * as vinyls_2020_2022 from "./vinyls-2020-2022";
import * as wish_list from "./wish-list";

const COLLECTION: Array<IVinylPostPurchase> = Object.values({
  ...vinyls_2005_2008,
  ...vinyls_2009_2012,
  ...vinyls_2013_2016,
  ...vinyls_2017_2019,
  ...vinyls_2020_2022
});

const WISH_LIST: Array<IVinylPrePurchase> = Object.values(wish_list);

export const VINYL = { COLLECTION, WISH_LIST };
