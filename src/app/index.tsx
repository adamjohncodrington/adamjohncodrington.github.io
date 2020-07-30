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

export const App: FC = () => {
  const PAGES: Array<IPage> = pages.filter(({ hide }: IPage): boolean => !hide);
  return (
    <BrowserRouter>
      <Switch>
        {PAGES.filter(({ hide }: IPage): boolean => !hide).map(
          ({ title, path, count, sections }: IPage, index: number) => (
            <Route key={index} path={path}>
              <NavBar pages={PAGES} />

              <PageShell data-test="page-content">
                <PageHeader titleText={title} count={count} />

                <PageSections pageSections={sections} />
              </PageShell>
            </Route>
          )
        )}

        <Redirect from="/" to={PAGES[0].path} />
      </Switch>
    </BrowserRouter>
  );
};
