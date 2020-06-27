import React from "react";
import styled from "styled-components";

import { PageHeader } from "../PageHeader";

const StyledPageShell = styled.section`
  padding: ${props => props.theme.page.shell.padding};
`;

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
