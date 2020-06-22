import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage, PageShell, PageSection } from "components";
import { Ul } from "primitives";
import { HOMEPAGE_ROUTE, PAGE_ROUTES } from "config";

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGE_ROUTES.map(({ icon, title, dest, page }: IRoute, index: number) => (
        <Route key={index} path={dest}>
          <PageShell title={title} icon={icon} page={page}>
            <Ul data-test="page-sections">
              {page.sections.map((item: IPageSection, index: number) => (
                <PageSection key={index} {...item} />
              ))}
            </Ul>
          </PageShell>
        </Route>
      ))}

      <Route path={HOMEPAGE_ROUTE.dest}>
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);
