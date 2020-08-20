import React, { FC } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PageSections, NavBar } from "components";
import { PAGES } from "pages";

const StyledMain = styled.main(
  ({ theme: { pageMargin, navBar } }: I_Theme) => css`
    height: calc(100vh - ${navBar.height} - 3 * (${pageMargin}));
    overflow-y: auto;
  `
);

const PageShell = styled.div(
  ({ theme: { pageMargin } }: I_Theme) => css`
    margin: ${pageMargin} ${pageMargin} 35px;

    > :not(:last-child) {
      margin-bottom: ${pageMargin};
    }
  `
);

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.filter(({ hide }: IPage): boolean => !hide).map(
        ({ title, path, sections }: IPage, index: number) => (
          <Route key={index} path={path}>
            <PageShell>
              <NavBar pages={PAGES} />

              <StyledMain data-test="page-content">
                <PageSections sections={sections} />
              </StyledMain>
            </PageShell>
          </Route>
        )
      )}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
