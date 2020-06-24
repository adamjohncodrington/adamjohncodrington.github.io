import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { css } from "styled-components";

import { HomePage, PageShell, PageSection } from "components";
import {
  HOMEPAGE_ROUTE,
  PAGE_ROUTES,
  DISPLAY_PAGE_SECTION_IN_2_COLUMNS_ON_DESKTOP
} from "config";
import { Ul, Li } from "primitives";
import { replaceSpacesWithDashes } from "utils";

interface IUse2Columns extends IThemeProp {
  use2columns: boolean;
}

const StyledUl = styled(Ul)`
  ${({ use2columns, theme }: IUse2Columns) =>
    use2columns &&
    css`
      @media (min-width: ${theme.breakpoints.tablet.minWidth}) {
        column-count: 2;
      }
    `}
`;

const StyledLi = styled(Li)`
  ${({ use2columns }: IUse2Columns) =>
    use2columns &&
    css`
      display: inline-block;
      width: 100%;
    `}
`;

export const App: React.FC = () => {
  const use2columns: boolean = DISPLAY_PAGE_SECTION_IN_2_COLUMNS_ON_DESKTOP;

  return (
    <BrowserRouter>
      <Switch>
        {PAGE_ROUTES.map(
          ({ icon, title, dest, page }: IRoute, index: number) => (
            <Route key={index} path={dest}>
              <PageShell title={title} icon={icon} page={page}>
                <StyledUl use2columns={use2columns} data-test="page-sections">
                  {page.sections.map(
                    (pageSection: IPageSection, index: number) => {
                      const dataTest: string =
                        "section-" + replaceSpacesWithDashes(pageSection.title);
                      return (
                        <StyledLi
                          use2columns={use2columns}
                          key={index}
                          data-test={dataTest}
                        >
                          <PageSection {...pageSection} />
                        </StyledLi>
                      );
                    }
                  )}
                </StyledUl>
              </PageShell>
            </Route>
          )
        )}

        <Route path={HOMEPAGE_ROUTE.dest}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
