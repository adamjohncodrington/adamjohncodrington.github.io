import React, { FC } from "react";
import styled from "styled-components";

import { useThemeContext } from "context";
import { Ul, Li, GridColumnDiv } from "primitives";
import {
  replaceSpacesWithDashes,
  useMediaQueries,
  validPageSectionData
} from "utils";

import { PageSection } from "../PageSection";

interface IPageSections {
  sections: IPageSection[];
}

const StyledGridColumnDiv = styled(GridColumnDiv)``;

export const PageSections: FC<IPageSections> = ({ sections }) => {
  const {
    pageLayout: { columnGap }
  }: ITheme = useThemeContext();
  const { pageUses2Columns } = useMediaQueries();

  const unhiddenPageSections: IPageSection[] = sections.filter(
    ({ hide }: IPageSection): boolean => !hide
  );

  const datafulPageSections: IPageSection[] = unhiddenPageSections.filter(
    ({ data }: IPageSection): boolean => validPageSectionData(data)
  );

  const validPageSectionCount: number = datafulPageSections.length;

  const sortedValidPageSections: IPageSection[] = datafulPageSections;

  const pageSectionsCol1: IPageSection[] = sortedValidPageSections.filter(
    (pageSection: IPageSection, index: number): boolean =>
      index < validPageSectionCount / 2
  );
  const pageSectionsCol2: IPageSection[] = sortedValidPageSections.filter(
    (pageSection: IPageSection): boolean =>
      !pageSectionsCol1.includes(pageSection)
  );

  const pageSectionColumns: IPageSection[][] = pageUses2Columns
    ? [pageSectionsCol1, pageSectionsCol2]
    : [sortedValidPageSections];

  return (
    <StyledGridColumnDiv
      columnGap={columnGap}
      data-test="page-sections"
      equalWidthColumns={true}
    >
      {pageSectionColumns.map(
        (pageSectionColumn: IPageSection[], index: number) => (
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
    </StyledGridColumnDiv>
  );
};
