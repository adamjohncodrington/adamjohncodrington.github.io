import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PageShell, PageSectionsLayout, NavBar } from "components";
import { PAGES } from "pages";

export const App: React.FC = () => (
  <BrowserRouter>
    <NavBar pages={PAGES} />

    <Switch>
      {PAGES.map(({ title, path, count, sections }: IPage, index: number) => (
        <Route key={index} path={path}>
          <PageShell title={title} count={count}>
            <PageSectionsLayout pageSections={sections} />
          </PageShell>
        </Route>
      ))}

      <Redirect from="/" to={PAGES[0].path} />
    </Switch>
  </BrowserRouter>
);
