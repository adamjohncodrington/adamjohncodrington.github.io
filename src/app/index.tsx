import React, { FC } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PageSections, NavBar } from "components";
import { PAGES } from "pages";

const StyledMain = styled.main(
  ({ theme: { navBar } }: I_Theme) => css`
    height: calc(100vh - ${navBar.height});
    overflow-y: auto;
  `
);

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.filter(({ hide }: IPage): boolean => !hide).map(
        ({ title, path, sections }: IPage, index: number) => (
          <Route key={index} path={path}>
            <NavBar pages={PAGES} />

            <StyledMain data-test="page-content">
              <PageSections sections={sections} />
            </StyledMain>
          </Route>
        )
      )}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
