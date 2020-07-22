import React, { FC } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PageHeader, PageSectionsLayout, NavBar } from "components";
import { PAGES } from "pages";

const PageShell = styled.main(
  ({ theme: { navBar, pageLayout } }: I_Theme) => css`
    padding: ${pageLayout.padding.all};
    height: calc(100vh - ${navBar.icon.size} - 2 * ${navBar.padding.vertical});
    overflow-y: auto;
  `
);

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.map(({ title, path, count, sections }: IPage, index: number) => (
        <Route key={index} path={path}>
          <NavBar pages={PAGES} />

          <PageShell data-test="page-content">
            <PageHeader titleText={title} count={count} />

            <PageSectionsLayout pageSections={sections} />
          </PageShell>
        </Route>
      ))}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
