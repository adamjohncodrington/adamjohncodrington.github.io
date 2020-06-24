import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage, PageShell, PageSection } from "components";
import { HOMEPAGE_ROUTE, PAGE_ROUTES } from "config";
import { Ul, Li } from "primitives";
import { replaceSpacesWithDashes } from "utils";

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGE_ROUTES.map(({ icon, title, dest, page }: IRoute, index: number) => (
        <Route key={index} path={dest}>
          <PageShell title={title} icon={icon} page={page}>
            <Ul data-test="page-sections">
              {page.sections.map((pageSection: IPageSection, index: number) => {
                const dataTest: string =
                  "section-" + replaceSpacesWithDashes(pageSection.title);
                return (
                  <Li key={index} data-test={dataTest}>
                    <PageSection {...pageSection} />
                  </Li>
                );
              })}
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
