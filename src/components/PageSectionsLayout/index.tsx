import React, { FC } from "react";

import { useThemeContext } from "context";
import { Ul, Li, GridColumnDiv } from "primitives";
import {
  replaceSpacesWithDashes,
  useMediaQueries,
  validPageSectionData
} from "utils";

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

  const unhiddenPageSections: Array<IPageSection> = pageSections.filter(
    ({ hide }: IPageSection): boolean => !hide
  );

  const datafulPageSections: Array<IPageSection> = unhiddenPageSections.filter(
    ({ data }: IPageSection): boolean => validPageSectionData(data)
  );

  const validPageSectionCount: number = datafulPageSections.length;

  const sortedValidPageSections: Array<IPageSection> = datafulPageSections;
  // .sort(
  //   (a: IPageSection, b: IPageSection): number => (a.title > b.title ? 1 : -1)
  // );

  const pageSectionsCol1: Array<IPageSection> = sortedValidPageSections.filter(
    (pageSection: IPageSection, index: number): boolean =>
      index < validPageSectionCount / 2
  );
  const pageSectionsCol2: Array<IPageSection> = sortedValidPageSections.filter(
    (pageSection: IPageSection): boolean =>
      !pageSectionsCol1.includes(pageSection)
  );

  const pageSectionColumns: Array<Array<IPageSection>> = pageUses2Columns
    ? [pageSectionsCol1, pageSectionsCol2]
    : [sortedValidPageSections];

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
