import { SvgFriends } from "resources";

import { FACTORY } from "./factory";

const SECTION_INSTRUCTORS: IPageSection = {
  SvgIcon: SvgFriends,
  title: "Instructors",
  data: { countedListItems: FACTORY.INSTRUCTORS }
};

export const sections: Array<IPageSection> = [SECTION_INSTRUCTORS].filter(
  (pageSection: IPageSection): boolean => !pageSection.hide
);
