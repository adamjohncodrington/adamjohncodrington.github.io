import React, { FC } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PageSections, NavBar } from "components";
import { PAGES } from "pages";
import { COLORS } from "styles";
import { H1 } from "primitives";

const { WHITE, GRAY_WHITE, GRAY_LIGHT, BLACK } = COLORS;

const StyledMain = styled.main(
  ({ theme: { navBar, pageLayout } }: I_Theme) => css`
    height: calc(100vh - ${navBar.height});
    overflow-y: auto;

    background: ${GRAY_WHITE};
  `
);

const StyledHeader = styled.header``;

const StyledH1 = styled(H1)`
  text-transform: lowercase;
  text-align: middle;
  padding: 5px 20px 15px;

  background: ${BLACK};
  color: ${GRAY_LIGHT};
`;

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.filter(({ hide }: IPage): boolean => !hide).map(
        ({ title, path, sections }: IPage, index: number) => (
          <Route key={index} path={path}>
            <StyledMain data-test="page-content">
              <StyledHeader>
                <StyledH1 bold={true}>{title}</StyledH1>
              </StyledHeader>

              <PageSections sections={sections} />
            </StyledMain>

            <NavBar pages={PAGES} />
          </Route>
        )
      )}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
