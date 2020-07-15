import React, { FC } from "react";

import { useThemeContext } from "context";
import { Ul, Li, GridColumnDiv } from "primitives";
import { replaceSpacesWithDashes, useMediaQueries } from "utils";

import { PageSection } from "../PageSection";

interface IPageSectionsLayout {
  pageSections: Array<IPageSection>;
}

export const PageSectionsLayout: FC<IPageSectionsLayout> = ({
  pageSections
}) => {
  const {
    pageLayout: { columnGap }
  }: ITheme = useThemeContext();
  const { pageUses2Columns } = useMediaQueries();

  const validPageSections: Array<IPageSection> = pageSections.filter(
    ({
      data: { countedListItems, gigs, recipes, theatreVisits, trips, vinyls }
    }: IPageSection): boolean => {
      const dataExists: boolean = !(
        (countedListItems && countedListItems.length === 0) ||
        (gigs && gigs.length === 0) ||
        (recipes &&
          recipes.filter((item: IRecipe): boolean => !item.hide).length ===
            0) ||
        (theatreVisits && theatreVisits.length === 0) ||
        (trips && trips.length === 0) ||
        (vinyls && vinyls.length === 0)
      );

      return dataExists;
    }
  );

  const validPageSectionCount: number = validPageSections.length;

  const pageSectionsCol1: Array<IPageSection> = validPageSections.filter(
    (pageSection: IPageSection, index: number): boolean =>
      index < validPageSectionCount / 2
  );
  const pageSectionsCol2: Array<IPageSection> = validPageSections.filter(
    (pageSection: IPageSection): boolean =>
      !pageSectionsCol1.includes(pageSection)
  );

  const pageSectionColumns: Array<Array<IPageSection>> = pageUses2Columns
    ? [pageSectionsCol1, pageSectionsCol2]
    : [validPageSections];

  return (
    <GridColumnDiv
      columnGap={columnGap}
      data-test="page-sections"
      equalWidthColumns={true}
    >
      {pageSectionColumns.map(
        (pageSectionColumn: Array<IPageSection>, index: number) => (
          <Ul key={index} data-test={"page-column-" + (index + 1)}>
            {pageSectionColumn.map(
              (pageSection: IPageSection, index: number) => (
                <Li
                  key={index}
                  data-test={
                    "section-" + replaceSpacesWithDashes(pageSection.title)
                  }
                >
                  <PageSection {...pageSection} />
                </Li>
              )
            )}
          </Ul>
        )
      )}
    </GridColumnDiv>
  );
};
