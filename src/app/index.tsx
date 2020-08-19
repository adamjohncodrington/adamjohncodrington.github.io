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
  `
);

const StyledHeader = styled.header``;

const StyledH1 = styled(H1)`
  margin-top: -5px;
  text-transform: lowercase;
  text-align: center;
  padding-bottom: 5px;

  color: ${GRAY_WHITE};
`;

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.filter(({ hide }: IPage): boolean => !hide).map(
        ({ title, path, sections }: IPage, index: number) => (
          <Route key={index} path={path}>
            <NavBar pages={PAGES} />

            <StyledMain data-test="page-content">
              {/* <StyledHeader>
                <StyledH1 bold={true}>{title}</StyledH1>
              </StyledHeader> */}

              <PageSections sections={sections} />
            </StyledMain>
          </Route>
        )
      )}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
