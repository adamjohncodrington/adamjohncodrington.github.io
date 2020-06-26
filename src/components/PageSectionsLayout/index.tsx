import React from "react";

import { Ul, Li, Columns } from "primitives";
import { replaceSpacesWithDashes, useMediaQueries } from "@utils";

import { PageSection } from "../PageSection";

interface IPageSectionsLayout {
  pageSections: Array<IPageSection>;
}

export const PageSectionsLayout: React.FC<IPageSectionsLayout> = ({
  pageSections
}) => {
  const validPageSections: Array<IPageSection> = pageSections.filter(
    ({
      data: {
        countedItems,
        gigCards,
        recipeCards,
        theatreCards,
        travelCards,
        vinylCards
      }
    }: IPageSection): boolean => {
      const validData: boolean = !(
        (countedItems && countedItems.length === 0) ||
        (gigCards && gigCards.length === 0) ||
        (recipeCards && recipeCards.filter(item => !item.hide).length === 0) ||
        (theatreCards && theatreCards.length === 0) ||
        (travelCards && travelCards.length === 0) ||
        (vinylCards && vinylCards.length === 0)
      );

      return validData;
    }
  );

  const { isDesktop } = useMediaQueries();

  const validPageSectionCount: number = validPageSections.length;

  const pageSectionsCol1: Array<IPageSection> = validPageSections.filter(
    (pageSection: IPageSection, index: number): boolean =>
      index < validPageSectionCount / 2
  );
  const pageSectionsCol2: Array<IPageSection> = validPageSections.filter(
    (pageSection: IPageSection): boolean =>
      !pageSectionsCol1.includes(pageSection)
  );

  const pageSectionColumns: Array<Array<IPageSection>> = isDesktop
    ? [pageSectionsCol1, pageSectionsCol2]
    : [validPageSections];

  return (
    <Columns data-test="page-sections">
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
    </Columns>
  );
};
