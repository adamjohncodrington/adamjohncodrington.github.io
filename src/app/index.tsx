import React, { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PageSections, NavBar } from "components";
import { PAGES } from "pages";

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.filter(({ hide }: IPage): boolean => !hide).map(
        ({ path, sections }: IPage, i: number) => (
          <Route key={i} path={path}>
            <header>
              <NavBar pages={PAGES} />
            </header>
            <main>
              <PageSections sections={sections} />
            </main>
          </Route>
        )
      )}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
