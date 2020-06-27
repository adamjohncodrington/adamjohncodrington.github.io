import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { SHOW_MEDIA_QUERY_BOOLEANS_AS_STRINGS } from "@config";
import {
  PageShell,
  PageSectionsLayout,
  MediaQueryChecks,
  NavBar
} from "components";
import { PAGES } from "pages";

export const App: React.FC = () => (
  <BrowserRouter>
    <NavBar pages={PAGES} />

    {SHOW_MEDIA_QUERY_BOOLEANS_AS_STRINGS && <MediaQueryChecks />}

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
