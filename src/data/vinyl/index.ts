import * as VINYLS_2005_2008 from "./vinyls-2005-2008";
import * as VINYLS_2009_2012 from "./vinyls-2009-2012";
import * as VINYLS_2013 from "./vinyls-2013";
import * as VINYLS_2014 from "./vinyls-2014";
import * as VINYLS_2015 from "./vinyls-2015";
import * as VINYLS_2016 from "./vinyls-2016";
import * as VINYLS_2017 from "./vinyls-2017";
import * as VINYLS_2018 from "./vinyls-2018";
import * as VINYLS_2019 from "./vinyls-2019";
import * as VINYLS_2020 from "./vinyls-2020";

export const VINYLS: Array<IVinyl> = Object.values({
  ...VINYLS_2005_2008,
  ...VINYLS_2009_2012,
  ...VINYLS_2013,
  ...VINYLS_2014,
  ...VINYLS_2015,
  ...VINYLS_2016,
  ...VINYLS_2017,
  ...VINYLS_2018,
  ...VINYLS_2019,
  ...VINYLS_2020
});
