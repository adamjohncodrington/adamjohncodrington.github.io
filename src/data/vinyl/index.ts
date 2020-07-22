import * as VINYLS_2005_2008 from "./vinyls-2005-2008";
import * as VINYLS_2009_2012 from "./vinyls-2009-2012";
import * as VINYLS_2013_2016 from "./vinyls-2013-2016";
import * as VINYLS_2017_2019 from "./vinyls-2017-2019";
import * as VINYLS_2020_2022 from "./vinyls-2020-2022";

export const VINYLS: Array<IVinyl> = Object.values({
  ...VINYLS_2005_2008,
  ...VINYLS_2009_2012,
  ...VINYLS_2013_2016,
  ...VINYLS_2017_2019,
  ...VINYLS_2020_2022
});
