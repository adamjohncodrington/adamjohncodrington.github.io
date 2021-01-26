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

interface Props {
  sections: PageSectionProps[];
}

export const PageSections: FC<Props> = ({ sections }) => {
  const { pageUses2Columns } = useMediaQueries();

  const unhiddenPageSections: PageSectionProps[] = sections.filter(
    ({ hide }: PageSectionProps): boolean => !hide
  );

  const datafulPageSections: PageSectionProps[] = unhiddenPageSections.filter(
    ({ data }: PageSectionProps): boolean => validPageSectionData(data)
  );

  const validPageSectionCount: number = datafulPageSections.length;

  const sortedValidPageSections: PageSectionProps[] = datafulPageSections;

  const pageSectionsCol1: PageSectionProps[] = sortedValidPageSections.filter(
    (pageSection: PageSectionProps, index: number): boolean =>
      index < validPageSectionCount / 2
  );
  const pageSectionsCol2: PageSectionProps[] = sortedValidPageSections.filter(
    (pageSection: PageSectionProps): boolean =>
      !pageSectionsCol1.includes(pageSection)
  );

  const pageSectionColumns: PageSectionProps[][] = pageUses2Columns
    ? [pageSectionsCol1, pageSectionsCol2]
    : [sortedValidPageSections];

  return (
    <StyledMain data-test="page-sections">
      {pageSectionColumns.map(
        (pageSectionColumn: PageSectionProps[], index: number) => (
          <Ul key={index} data-test={"page-column-" + (index + 1)}>
            {pageSectionColumn.map(
              (pageSection: PageSectionProps, index: number) => (
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
