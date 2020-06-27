import React from "react";
import styled, { css } from "styled-components";

import { PageHeader } from "../PageHeader";

const StyledPageShell = styled.main(
  ({ theme: { navBar, pageShell } }: IThemeProp) => css`
    padding: ${pageShell.padding.all};
    height: calc(100vh - ${navBar.icon.size} - 2 * ${navBar.padding.vertical});
    overflow-y: auto;
  `
);

interface PageShellProps {
  title: string;
  count?: number;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  title,
  count,
  children
}) => (
  <StyledPageShell data-test="page-shell">
    <PageHeader titleText={title} count={count} />

    {children}
  </StyledPageShell>
);
