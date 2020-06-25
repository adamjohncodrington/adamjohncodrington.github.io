import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage, PageShell, PageSectionsLayout } from "components";
import { HOMEPAGE_ROUTE, PAGE_ROUTES } from "config";

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGE_ROUTES.map(({ icon, title, dest, page }: IRoute, index: number) => (
        <Route key={index} path={dest}>
          <PageShell title={title} icon={icon} page={page}>
            <PageSectionsLayout pageSections={page.sections} />
          </PageShell>
        </Route>
      ))}

      <Route path={HOMEPAGE_ROUTE.dest}>
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);
