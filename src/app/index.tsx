import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { HomePage, PageShell, PageSection } from "../components";
import { HOMEPAGE_ROUTE, PAGE_ROUTES } from "../routes";

const SectionsContainer = styled.div`
  > *:last-child {
    border-bottom: 0;
  }
`;

const Page: React.FC<IRoute> = ({ icon, title, pageData }) => (
  <PageShell title={title} icon={icon} pageData={pageData}>
    <SectionsContainer data-test="page-sections">
      {pageData.sections.map((item: IPageSection, index: number) => (
        <PageSection key={index} {...item} />
      ))}
    </SectionsContainer>
  </PageShell>
);

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {PAGE_ROUTES.map((route: IRoute, index: number) => (
        <Route key={index} path={route.dest}>
          <Page {...route} />
        </Route>
      ))}

      <Route path={HOMEPAGE_ROUTE.dest}>
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);
