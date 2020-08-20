import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Ul, Li } from "primitives";
import { CSS } from "styles";
import {
  replaceSpacesWithDashes,
  useMediaQueries,
  validPageSectionData
} from "utils";

import { PageSection } from "../PageSection";

const StyledMain = styled.main(
  ({ theme: { navBar, pageMargin } }: I_Theme) => css`
    ${CSS.GRID_COLUMN_EQUAL_WIDTHS};
    column-gap: calc(2 * ${pageMargin});

    height: calc(100vh - ${navBar.height});
    overflow-y: auto;

    padding: ${pageMargin} ${pageMargin};
  `
);

interface IPageSections {
  sections: IPageSection[];
}

export const PageSections: FC<IPageSections> = ({ sections }) => {
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
    <StyledMain data-test="page-sections">
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
    </StyledMain>
  );
};
