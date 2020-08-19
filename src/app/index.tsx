import React, { FC } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PageHeader, PageSections, NavBar } from "components";
import { PAGES as pages } from "pages";
import { COLORS } from "styles";

const { WHITE, GRAY_WHITE } = COLORS;

const PageShell = styled.main(
  ({ theme: { navBar, pageLayout } }: I_Theme) => css`
    padding: ${pageLayout.padding.all};
    height: calc(100vh - ${navBar.icon.size} - 2 * ${navBar.padding.vertical});
    overflow-y: auto;

    background: linear-gradient(${WHITE}, ${GRAY_WHITE}) no-repeat center center;
  `
);

const PAGES: IPage[] = pages.filter(({ hide }: IPage): boolean => !hide);

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.filter(({ hide }: IPage): boolean => !hide).map(
        (page: IPage, index: number) => {
          const { title, path, sections } = page;
          return (
            <Route key={index} path={path}>
              <header>
                <NavBar pages={PAGES} {...page} />
              </header>

              <main>
                <PageShell data-test="page-content">
                  <PageSections pageSections={sections} />
                </PageShell>
              </main>
            </Route>
          );
        }
      )}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
