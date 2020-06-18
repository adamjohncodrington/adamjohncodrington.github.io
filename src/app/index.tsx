import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage, PageShell, PageSection } from "../components";
import { Ul, Li } from "../primitives";
import { HOMEPAGE_ROUTE, PAGE_ROUTES } from "../routes";

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGE_ROUTES.map(
        ({ icon, title, dest, pageData }: IRoute, index: number) => (
          <Route key={index} path={dest}>
            <PageShell title={title} icon={icon} pageData={pageData}>
              <Ul data-test="page-sections">
                {pageData.sections.map((item: IPageSection, index: number) => (
                  <PageSection key={index} {...item} />
                ))}
              </Ul>
            </PageShell>
          </Route>
        )
      )}

      <Route path={HOMEPAGE_ROUTE.dest}>
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);
