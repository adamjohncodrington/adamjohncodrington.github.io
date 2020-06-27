import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage, PageShell, PageSectionsLayout } from "components";
import { HOMEPAGE_ROUTE } from "config";
import { PAGES } from "pages";

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGES.map(
        ({ icon, title, path, count, sections }: IPage, index: number) => (
          <Route key={index} path={path}>
            <PageShell title={title} icon={icon} count={count}>
              <PageSectionsLayout pageSections={sections} />
            </PageShell>
          </Route>
        )
      )}

      <Route path={HOMEPAGE_ROUTE.path}>
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);
