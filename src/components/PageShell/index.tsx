import React from "react";
import styled from "styled-components";

import { PageTitle } from "../PageTitle";

const StyledPageShell = styled.section`
  padding: ${props => props.theme.page.shell.padding};
`;

interface PageShellProps {
  title: string;
  icon: IImageSrc;
  count?: number;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  title,
  icon,
  count,
  children
}) => (
  <StyledPageShell data-test="page-shell">
    <PageTitle titleText={title} count={count} icon={icon} />

    {children}
  </StyledPageShell>
);
